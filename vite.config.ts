import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  root: ".", // ✨ <-- this is critical
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src")
    }
  },
  server: {
    port: 3000
  },
  build: {
    outDir: "dist",
    emptyOutDir: true
  }
});