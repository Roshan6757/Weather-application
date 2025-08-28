import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false
  }
})

// export default defineConfig({
//   server: {
//     headers: {
//       "Content-Security-Policy": "default-src 'self'; script-src 'self' 'unsafe-eval';"
//     }
//   }
// })