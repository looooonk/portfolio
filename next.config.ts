import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    // Static export for GitHub Pages; server-based image optimization is
    // unavailable there, so images must be served unoptimized.
    output: "export",
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
