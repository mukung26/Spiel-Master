
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({ mode }) => {
    // Use __dirname instead of process.cwd() to fix property 'cwd' does not exist error on type 'Process'
    const env = loadEnv(mode, __dirname, '');
    return {
      // Use relative base path to ensure assets load correctly on GitHub Pages
      base: './',
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        // This effectively replaces process.env.API_KEY with the actual string value during build
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        // Polyfill process.env to prevent "process is not defined" errors in some libraries
        'process.env': {}
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
