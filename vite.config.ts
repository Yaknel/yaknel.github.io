/// <reference types="vitest/config" />
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'

// BASE_PATH lo inyecta el workflow de GitHub Pages:
// "/" con dominio propio, "/<repo>/" mientras uses <usuaria>.github.io/<repo>.
export default defineConfig({
  base: process.env.BASE_PATH ?? '/',
  plugins: [react()],
  // Mantine + React ocupan ~160 kB gzip en el bundle principal; es esperado.
  build: { chunkSizeWarningLimit: 600 },
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/setup.ts'],
    css: false,
  },
})
