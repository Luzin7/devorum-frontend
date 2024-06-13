/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    serverActions: true
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ['image/avif', 'image/webp']
  }
};
