import path from "path"
import tailwindcss from "@tailwindcss/vite" // <--- New
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react(), tailwindcss()], // <--- Add it here
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})