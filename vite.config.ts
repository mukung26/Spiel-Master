
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ mode }) => {
  const root = process.cwd();
  
  // Load local .env files (if they exist)
  const env = loadEnv(mode, root, '');
  
  // PRIORITY ORDER:
  // 1. System Environment (GitHub Actions Secrets)
  // 2. .env file variables (Local Development)
  const apiKey = process.env.GEMINI_API_KEY || process.env.API_KEY || env.GEMINI_API_KEY || env.API_KEY || "";

  // Logging status for debugging
  if (!apiKey) {
    console.warn("\x1b[33m[Vite Config] ⚠️  WARNING: No API Key found.\x1b[0m");
    if (mode === 'production') {
        console.warn("If running in GitHub Actions, ensure 'API_KEY' is set in Repository Secrets.");
    } else {
        console.warn("If running locally, ensure '.env.local' exists with GEMINI_API_KEY=...");
    }
  } else {
    console.log(`\x1b[32m[Vite Config] ✅ API Key detected and injected.\x1b[0m`);
  }

  return {
    base: '/Spiel-Master/', // EXPLICIT REPO NAME FOR GITHUB PAGES
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(root, './')
      }
    },
    define: {
      // This injects the key into the browser code during the build
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
