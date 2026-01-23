import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // Add an empty turbopack config to resolve the error with Turbopack and webpack config
  turbopack: {},
  webpack: (config) => {
    config.watchOptions = {
      ...config.watchOptions,
      ignored: ['**/node_modules', '**/.git'],
    };
    return config;
  },
};

export default nextConfig;
