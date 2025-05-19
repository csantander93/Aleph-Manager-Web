import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      png: {
        quality: 80,
      },
      jpeg: {
        quality: 80,
      },
      jpg: {
        quality: 80,
      },
      webp: {
        quality: 80,
      },
    }),
  ],
  base: '/',
  server: {
    host: '0.0.0.0',
    port: 5174,
  },
  css: {
    postcss: './postcss.config.mjs'
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Divide tu bundle en chunks más pequeños
          react: ['react', 'react-dom'],
          vendor: ['lodash', 'axios'], // añade otras dependencias grandes aquí
        },
      },
    },
  }
})