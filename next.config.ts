import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  turbopack: {},
  webpack: (config) => {
    config.watchOptions = {
      ...config.watchOptions,
      ignored: ['**/nul', '**/node_modules', '**/.git'],
    };
    return config;
  },
};

export default nextConfig;
