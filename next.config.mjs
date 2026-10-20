import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    turbo: {
      resolveAlias: {
        "react-router": "./src/compat/react-router.tsx",
        "react-router-dom": "./src/compat/react-router.tsx",
      },
    },
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "./src"),
      "react-router": path.resolve(__dirname, "./src/compat/react-router.tsx"),
      "react-router-dom": path.resolve(
        __dirname,
        "./src/compat/react-router.tsx"
      ),
    };
    return config;
  },
};

export default nextConfig;
