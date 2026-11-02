import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Published at https://<user>.github.io/trama/app/ (see ADR-0002)
  base: '/trama/app/',
  plugins: [react()],
  // Allow importing shared tokens from ../design
  server: { fs: { allow: ['..'] } },
})
