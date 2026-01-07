import type { NextConfig } from 'next';
const publicUrl = process.env.PUBLIC_URL || '';

const nextConfig: NextConfig = {
  assetPrefix: publicUrl,
  output: 'export',
  env: {
    PUBLIC_URL: publicUrl,
  },
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
