import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const projectFile = (name) => fileURLToPath(new URL(name, import.meta.url))

export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: projectFile('./index.html'),
        iching: projectFile('./iching-najia.html'),
      },
    },
  },
})
