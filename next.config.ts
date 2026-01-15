import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'marcobi.com.br'
      },
    ]
  }
};

export default nextConfig;
