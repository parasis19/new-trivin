import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
      alias: {
      '@': '/src', // This points @ to the src directory
    },
})
