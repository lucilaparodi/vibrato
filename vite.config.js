import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  base: "", // 👈🏽 esto es lo nuevo y clave
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://api.lyrics.ovh",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "")
      }
    }
  }
})
