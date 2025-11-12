import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/CoachPro/', // remplace EXACTEMENT par le nom de ton repo GitHub
  build: {
    outDir: 'docs', // si tu déploies depuis /docs
  },
})
