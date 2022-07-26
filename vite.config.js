import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@' : path.resolve(__dirname, './src'),
      '@images' : path.resolve(__dirname, './src/assets/images'),
      '@components' : path.resolve(__dirname, './src/components'),
      '@tools' : path.resolve(__dirname, './src/tools'),
      '@requests' : path.resolve(__dirname, './src/requests'),
      '@styles' : path.resolve(__dirname, './src/styles')
    },
  },
})
