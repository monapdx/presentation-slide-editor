import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/presentation-slide-editor/",
  plugins: [react()],
});