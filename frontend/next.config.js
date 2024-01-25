/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['st3.depositphotos.com'],
  },
  eslint: {
    dirs: ['src'],
  },
};

module.exports = nextConfig;
