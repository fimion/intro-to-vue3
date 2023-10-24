import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        'main': resolve(__dirname, 'index.html'),
        '01-basics': resolve(__dirname, '01-basics.html'),
        '02-vue-sfc': resolve(__dirname, '01-vue-sfc.html'),
      },
    },
  },
  plugins: [vue()],
})
