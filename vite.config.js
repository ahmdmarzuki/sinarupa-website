import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { visualizer } from "rollup-plugin-visualizer";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    visualizer({
      open: true, // Automatically open the visualization in your browser
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            // Create a separate chunk for node_modules
            return "vendor";
          }
          if (id.includes("components/")) {
            // Create a chunk for components
            return "components";
          }
          // You can add more custom chunking conditions here
        },
      },
    },
  },
});
