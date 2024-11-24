import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "out",
  // Required for GitHub Pages deployment
  basePath: process.env.NODE_ENV === "production" ? "/deanlol-cv" : "/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
