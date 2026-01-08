import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '14.96.106.109',
        port: '9444',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
