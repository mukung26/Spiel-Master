
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ mode }) => {
  const root = process.cwd();
  
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, root, '');
  
  // FALLBACK KEY: Provided from your local context to ensure build works immediately.
  const USER_PROVIDED_KEY = "AIzaSyC7iXvQTgtD-0og2bRGcPnafxHBZ55bJjM";

  // PRIORITY ORDER:
  // 1. System Environment (GitHub Actions Secrets)
  // 2. .env file variables
  // 3. Hardcoded Fallback
  const apiKey = process.env.GEMINI_API_KEY || 
                 process.env.API_KEY || 
                 env.GEMINI_API_KEY || 
                 env.API_KEY || 
                 USER_PROVIDED_KEY;

  if (apiKey) {
    console.log(`\x1b[32m[Vite Config] ✅ API Key injected successfully.\x1b[0m`);
  } else {
    console.warn("\x1b[33m[Vite Config] ⚠️  WARNING: No API Key found. AI features will fail.\x1b[0m");
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
