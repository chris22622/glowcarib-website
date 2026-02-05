import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static HTML export for Namecheap hosting
  output: 'export',

  // Required for static export with Next.js Image component
  images: {
    unoptimized: true,
  },

  // Trailing slashes for better static file serving
  trailingSlash: true,
};

export default nextConfig;
