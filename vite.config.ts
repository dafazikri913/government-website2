import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      // Tambahkan alias manual untuk Radix UI yang error
      "@radix-ui/react-tabs@1.1.3": "@radix-ui/react-tabs",
      // Jika nanti muncul error untuk radix lain, tambahkan di bawah sini:
      // '@radix-ui/react-dialog@1.1.6': '@radix-ui/react-dialog',
    },
  },
  build: {
    outDir: "dist",
  },
});
