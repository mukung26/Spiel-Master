
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({ mode }) => {
  // Robust cwd detection
  const cwd = typeof process !== 'undefined' && typeof process.cwd === 'function' ? process.cwd() : '.';
  
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, cwd, '');
  
  // Robust API Key Detection order:
  // 1. System Environment (GitHub Actions/CI)
  // 2. .env files loaded by Vite
  const apiKey = 
    process.env.API_KEY || 
    process.env.GEMINI_API_KEY || 
    process.env.VITE_API_KEY ||
    env.API_KEY || 
    env.GEMINI_API_KEY ||
    env.VITE_API_KEY;

  // Log detection status (security safe: do not log the actual key)
  if (apiKey) {
    console.log('[Vite Config] API Key detected successfully.');
  } else {
    console.warn('[Vite Config] WARNING: API Key not found in environment variables! AI features may fail.');
  }

  return {
    // Base must be './' for GitHub Pages to find assets (JS/CSS) correctly on a sub-path
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
      // Define global constants for the code to use. 
      // These are replaced at build time with the actual string values.
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
