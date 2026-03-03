import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],

  // 👇 This is the critical line for GitHub Pages
  base: "/presentation-slide-editor/",

  build: {
    outDir: "dist",
    emptyOutDir: true,
  }
})