
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ mode }) => {
  const root = process.cwd();
  
  // Load env file based on `mode` in the current working directory.
  const env = loadEnv(mode, root, '');
  
  // LOGIC: Aggregate all API Keys into a pool
  const keyPool = new Set<string>();
  
  // Helper to scan an object for keys
  const scanForKeys = (source: Record<string, string | undefined>) => {
    Object.keys(source).forEach(key => {
      // Look for API_KEY, API_KEY_2, GEMINI_API_KEY, etc.
      if (key.startsWith('API_KEY') || key.startsWith('GEMINI_API_KEY')) {
        const val = source[key];
        if (val) {
          // Support comma-separated values in a single variable
          val.split(',').forEach(v => {
            const clean = v.trim();
            // Filter out placeholders
            if (clean && !clean.includes('PASTE_YOUR') && clean.length > 10) {
              keyPool.add(clean);
            }
          });
        }
      }
    });
  };

  // 1. Scan process.env (System Variables / Secrets)
  scanForKeys(process.env);
  // 2. Scan .env file loaded by Vite
  scanForKeys(env);

  const apiKeys = Array.from(keyPool);

  if (apiKeys.length > 0) {
    console.log(`\x1b[32m[Vite Config] ✅ Loaded ${apiKeys.length} API Key(s) for rotation pool.\x1b[0m`);
  } else {
    console.warn("\x1b[33m[Vite Config] ⚠️  WARNING: No valid API Keys found. AI features will fail.\x1b[0m");
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
      // Inject the pool of keys
      'process.env.API_KEYS': JSON.stringify(apiKeys),
      // Fallback for legacy code relying on single key
      'process.env.API_KEY': JSON.stringify(apiKeys[0] || ''),
    },
    build: {
      outDir: 'dist',
      emptyOutDir: true,
      sourcemap: false
    }
  };
});
