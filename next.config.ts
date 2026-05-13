import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages hosting
  output: "export",

  // Project page URL: https://notsostoney.github.io/portfolio-v3/
  basePath: "/portfolio-v3",

  // Required for static image optimisation with export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
