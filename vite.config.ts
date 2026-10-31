import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, "index.html"),
        accessibility: resolve(__dirname, "accessibility/index.html"),
        privacy: resolve(__dirname, "privacy/index.html"),
        notFound: resolve(__dirname, "404.html"),
      },
    },
  },
});
