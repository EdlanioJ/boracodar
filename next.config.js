/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: 'github.com',
        protocol: 'https',
      },
      {
        hostname: 'media.licdn.com',
        protocol: 'https',
      },
    ],
  },
};

module.exports = nextConfig;
