import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    host: '0.0.0.0',   // Esto hace que el servidor escuche en todas las interfaces de red disponibles
    port: 5174,         // Puedes elegir el puerto que desees
  },
  css: {
    postcss: './postcss.config.mjs' // o .cjs según tu elección
  }
})