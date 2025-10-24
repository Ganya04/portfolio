import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    server: {
      port: 3000,
    },
  };

  if (command !== 'serve') {
    config.base = '/portfolio/';
  }

  return config;
});
