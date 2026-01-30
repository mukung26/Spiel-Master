
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({ mode }) => {
  // 1. Try loading via Vite's standard loadEnv
  const env = loadEnv(mode, __dirname, '');
  
  // 2. Manual fallback: Explicitly read .env.local using fs
  // This helps in environments (like portable node on Windows) where process.cwd() might be unexpected
  let manualEnv: Record<string, string> = {};
  try {
    const envPath = path.resolve(__dirname, '.env.local');
    if (fs.existsSync(envPath)) {
      console.log(`[Vite Config] Found .env.local at: ${envPath}`);
      const envFileContent = fs.readFileSync(envPath, 'utf-8');
      envFileContent.split('\n').forEach(line => {
        // Simple parse: KEY=VALUE
        const parts = line.split('=');
        if (parts.length >= 2) {
          const key = parts[0].trim();
          const value = parts.slice(1).join('=').trim(); 
          if (key && !key.startsWith('#')) {
            manualEnv[key] = value;
          }
        }
      });
    }
  } catch (e) {
    console.warn("[Vite Config] Failed to manually parse .env.local", e);
  }

  // 3. Determine API Key with robust priority
  // System Env > Manual .env.local > Vite Loaded Env
  const rawApiKey = 
    process.env.API_KEY || 
    process.env.GEMINI_API_KEY || 
    manualEnv.GEMINI_API_KEY || 
    manualEnv.API_KEY ||
    env.API_KEY || 
    env.GEMINI_API_KEY;

  // Clean the key (remove quotes if present)
  const apiKey = rawApiKey ? rawApiKey.replace(/["']/g, '').trim() : '';

  // LOGGING: Critical for debugging build
  if (apiKey) {
    console.log('\x1b[32m%s\x1b[0m', `[Vite Build] ✅ API Key detected: ${apiKey.substring(0, 5)}...`);
  } else {
    console.log('\x1b[31m%s\x1b[0m', `[Vite Build] ❌ WARNING: No API Key found! AI features will not work.`);
    console.log('Checked locations: process.env, .env.local, .env');
  }

  return {
    // './' allows assets to be found relatively, crucial for GitHub Pages sub-directories
    base: './', 
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './')
      }
    },
    optimizeDeps: {
      include: ['@dnd-kit/core', '@dnd-kit/sortable', '@dnd-kit/utilities', 'lucide-react']
    },
    define: {
      // Injects the key into the browser code
      'process.env.API_KEY': JSON.stringify(apiKey),
      'process.env.GEMINI_API_KEY': JSON.stringify(apiKey),
    },
    build: {
      outDir: 'dist',
      emptyOutDir: true,
      sourcemap: false
    }
  };
});
