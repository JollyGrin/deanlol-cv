import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Required for GitHub Pages deployment
  basePath: process.env.NODE_ENV === "production" ? "/deanlol-cv" : "",
};

export default nextConfig;
