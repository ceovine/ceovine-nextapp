import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'app.ceovine.com',
        pathname: '/wp-content/uploads/**',
      },
    ],

    // 🔥 IMPORTANT PERFORMANCE SETTINGS
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [360, 414, 640, 768, 1024, 1280],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
};

export default nextConfig;


