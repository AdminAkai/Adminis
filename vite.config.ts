import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { FontaineTransform } from 'fontaine'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    FontaineTransform.vite({
      fallbacks: ['Courier New', 'monospace'],
      resolvePath: (id) => new URL(`./public${id}`, import.meta.url),
    }),
  ],
  resolve: {
    alias: {
      src: '/src',
    },
  },
  build: {
    sourcemap: true,
  },
})
