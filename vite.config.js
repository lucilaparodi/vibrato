import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Cuando la URL comience con '/api',
      // la petición se redirigirá a https://api.lyrics.ovh
      "/api": {
        target: "https://api.lyrics.ovh",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
