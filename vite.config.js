import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// This is the whole build config. You will rarely need to touch it.
export default defineConfig({
  plugins: [react()],
})
