import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": `${__dirname}/src`,
      "@assets": `${__dirname}/src/assets`,
      "@components": `${__dirname}/src/components`,
      "@pages": `${__dirname}/src/pages`,
      "@styles": `${__dirname}/src/styles`,
      "@utils": `${__dirname}/src/utils`,
      "@hooks": `${__dirname}/src/hooks`,
      "@contexts": `${__dirname}/src/contexts`,
      "@services": `${__dirname}/src/services`,
    },
  },
  define: {
    "process.env": process.env,
    global: "window",
  },
});
