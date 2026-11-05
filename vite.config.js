import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// base : le site est servi par GitHub Pages sous /social-proof-section/
export default defineConfig({ base: '/social-proof-section/', plugins: [tailwindcss()] })
