
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    // Use '.' instead of process.cwd() to avoid potential Node version conflicts
    const env = loadEnv(mode, '.', '');
    return {
      base: './', // Ensures relative paths for GitHub Pages
      plugins: [react()],
      define: {
        // Stringify keys to safely embed in the build
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env': {} // Polyfill for other process.env usage
      },
      resolve: {
        alias: {
          // Ensure @/ resolves to root if needed, though relative paths are used
          '@': './'
        }
      },
      build: {
        outDir: 'dist',
        rollupOptions: {
            external: [],
        }
      }
    };
});
