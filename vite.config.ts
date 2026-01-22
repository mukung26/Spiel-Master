
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      base: './', // Ensures relative paths for GitHub Pages
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env': {}
      },
      resolve: {
        alias: {
          // Empty alias to prevent confusion, we use relative paths
        }
      },
      build: {
        outDir: 'dist',
        rollupOptions: {
            // Ensure no externalization issues
            external: [],
        }
      }
    };
});
