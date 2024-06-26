/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    serverActions: true
  },
  formats: ['image/webp'],
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
      }
    ]
  }
};
