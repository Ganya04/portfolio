import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // or any preferred port
  },
});

// import miniSvgDataUri from "mini-svg-data-uri";

// export default defineConfig({
//   resolve: {
//     alias: {
//       "mini-svg-data-uri": miniSvgDataUri,
//     },
//   },
// });
