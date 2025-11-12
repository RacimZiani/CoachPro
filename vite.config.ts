import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/CoachPro/',   // 👈 très important : ton nom de repo entre /.../
  build: {
    outDir: 'docs',     // si tu déploies sur GitHub Pages depuis /docs
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
})
