/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['wp.dynamiclayers.net'],
  },
  experimental: {
    appDir: false,
  },
}

module.exports = nextConfig
