/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://sepolia.drpc.org/:path*', // Proxy to external API
      },
    ];
  },
};

module.exports = nextConfig;
