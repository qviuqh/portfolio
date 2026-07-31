import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base URL is read from the VITE_BASE_URL env var so the app can be deployed
// under a sub-path (e.g. GitHub Pages: https://username.github.io/repo-name/).
// Locally it defaults to '/'.
// Example:
//   VITE_BASE_URL=/my-portfolio/ npm run build
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: process.env.VITE_BASE_URL || '/',
}))
