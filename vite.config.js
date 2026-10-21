import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Vercel sirve en la raíz ("/"). GitHub Pages sirve en un subdirectorio
  // ("/sayanes-store/") y necesita el prefijo en cada asset.
  base: process.env.BASE_PATH || '/',
  plugins: [react(), tailwindcss()],
})
