import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'marcobi.com.br'
      },
    ]
  }
};

export default nextConfig;