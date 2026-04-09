import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      // Alias sapu bersih untuk mengatasi import berpola @library@versi
      "@radix-ui/react-tabs@1.1.3": "@radix-ui/react-tabs",
      "@radix-ui/react-slot@1.1.2": "@radix-ui/react-slot",
      "@radix-ui/react-label@2.1.2": "@radix-ui/react-label",
      "@radix-ui/react-dialog@1.1.6": "@radix-ui/react-dialog",
      "@radix-ui/react-dropdown-menu@2.1.6": "@radix-ui/react-dropdown-menu",
      "@radix-ui/react-popover@1.1.6": "@radix-ui/react-popover",
      "@radix-ui/react-tooltip@1.1.8": "@radix-ui/react-tooltip",
      "@radix-ui/react-select@2.1.6": "@radix-ui/react-select",
      "lucide-react@0.487.0": "lucide-react",
      "class-variance-authority@0.7.1": "class-variance-authority",
      clsx: path.resolve(__dirname, "./node_modules/clsx"),
      "tailwind-merge": path.resolve(
        __dirname,
        "./node_modules/tailwind-merge",
      ),
    },
  },
  build: {
    outDir: "dist",
    target: "esnext",
  },
});
