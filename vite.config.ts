
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
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
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY || env.API_KEY || ''),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY || env.API_KEY || ''),
      'process.env': {}
    },
    build: {
      outDir: 'dist',
      emptyOutDir: true,
      sourcemap: false,
      commonjsOptions: {
        include: [/node_modules/],
        transformMixedEsModules: true
      }
    }
  };
});
