import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base path for GitHub Pages (repo name)
  base: "/portfolio/",
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
});
