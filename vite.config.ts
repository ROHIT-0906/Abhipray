import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/Abhipray/", // 👈 replace with your repo name
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    chunkSizeWarningLimit: 1000, // 👈 raise from 500 KB → 1000 KB
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"], // split react libs
        },
      },
    },
  },
}));
