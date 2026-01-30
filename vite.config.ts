
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';

export default defineConfig(({ mode }) => {
  const root = process.cwd();
  console.log(`\n[Vite Config] Current Directory: ${root}`);
  
  // 1. Debug: List all .env files found
  try {
    const files = fs.readdirSync(root).filter(f => f.startsWith('.env'));
    console.log(`[Vite Config] Found config files: ${files.join(', ')}`);
  } catch (e) {
    console.log(`[Vite Config] Could not list files: ${e}`);
  }

  // 2. Try to read .env.local manually
  let apiKey = "";
  const envLocalPath = path.resolve(root, '.env.local');

  if (fs.existsSync(envLocalPath)) {
    console.log(`[Vite Config] Reading: ${envLocalPath}`);
    try {
      const content = fs.readFileSync(envLocalPath, 'utf-8');
      const match = content.match(/GEMINI_API_KEY=(.*)/);
      if (match && match[1]) {
        apiKey = match[1].trim();
      }
    } catch (e) {
      console.warn("[Vite Config] Failed to parse .env.local");
    }
  }

  // 3. Fallback to process.env
  if (!apiKey) {
    const env = loadEnv(mode, root, '');
    apiKey = env.GEMINI_API_KEY || env.API_KEY || process.env.GEMINI_API_KEY || "";
  }

  // 4. Final Status
  if (apiKey) {
    console.log(`\x1b[32m[Vite Config] ✅ SUCCESS! API Key found: ${apiKey.substring(0, 5)}...\x1b[0m\n`);
  } else {
    console.log(`\x1b[31m[Vite Config] ❌ ERROR: No API Key found. Your AI features will fail.\x1b[0m`);
    console.log(`[Vite Config] Please ensure you have a file named '.env.local' (not .txt) with GEMINI_API_KEY=...\n`);
  }

  return {
    base: './', // Ensures relative paths for GitHub Pages
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(root, './')
      }
    },
    define: {
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
