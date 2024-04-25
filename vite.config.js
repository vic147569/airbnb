import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  hostname: '0.0.0.0',
  port: 8080,
  open: true,
  https: false,
  ssr: false,
  base: './',
  outDir: 'dist',
  proxy: {
    '/api': {
      target: 'http://codercba.com:1888/airbnb',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, '')
    }
  }
})
