import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
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
