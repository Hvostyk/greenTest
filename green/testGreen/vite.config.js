import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@greensight/gds': path.resolve(__dirname, '../../gds/dist/esm')
    }
  }
})
