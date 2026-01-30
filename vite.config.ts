
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ mode }) => {
  const root = process.cwd();
  
  // Load env file based on `mode` in the current working directory.
  const env = loadEnv(mode, root, '');
  
  // PRIORITY ORDER:
  // 1. System Environment (GitHub Actions Secrets)
  // 2. .env file variables
  const apiKey = process.env.GEMINI_API_KEY || 
                 process.env.API_KEY || 
                 env.GEMINI_API_KEY || 
                 env.API_KEY;

  if (apiKey) {
    // Mask key in logs for security
    const maskedKey = apiKey.substring(0, 4) + '...';
    console.log(`\x1b[32m[Vite Config] ✅ API Key detected (${maskedKey}).\x1b[0m`);
  } else {
    console.warn("\x1b[33m[Vite Config] ⚠️  WARNING: No API Key found. AI features will fail.\x1b[0m");
    console.warn("\x1b[33m[Vite Config] Please create a .env file with API_KEY=your_key_here\x1b[0m");
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
