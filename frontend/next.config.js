/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['st3.depositphotos.com', 'socialdance.id', '103.117.56.241'],
  },
  eslint: {
    dirs: ['src'],
  },
};

module.exports = nextConfig;
