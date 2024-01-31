/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'socialdance.id',
      },
      {
        protocol: 'https',
        hostname: '**.socialdance.id',
      },
      {
        hostname: '103.117.56.241',
      },
    ],
  },
  eslint: {
    dirs: ['src'],
  },
};

module.exports = nextConfig;
