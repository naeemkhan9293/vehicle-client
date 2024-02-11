/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'http',
          hostname: 'localhost',
          // hostname: 'c2b6jtbx-4000.inc1.devtunnels.ms',
          port: '4000',
          pathname: '/images/**',
        },
      ],
    },
  }