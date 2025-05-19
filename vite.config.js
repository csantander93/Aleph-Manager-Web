import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      png: { quality: 80 },
      jpeg: { quality: 80 },
      jpg: { quality: 80 },
      webp: { quality: 80 }
    })
  ],
  resolve: {
    alias: {
      'lodash': 'lodash-es' // Fuerza esta redirección
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-i18next'],
          framer: ['framer-motion'],
          i18n: ['i18next', 'i18next-browser-languagedetector', 'i18next-http-backend'],
        }
      }
    }
  },
  // Resto de tu configuración original...
  base: '/',
  server: {
    host: '0.0.0.0',
    port: 5174
  },
  css: {
    postcss: './postcss.config.mjs'
  }
});