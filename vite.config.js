import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  base: '/Notes-App-react',
  server:{
  host:true,
allowedHosts:['triangle-skewer-visibly.ngrok-free.dev']
  }
})
