/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['st3.depositphotos.com'],
    // remotePatterns: [
    //   {
    //     protocol: 'http',
    //     hostname: process.env.NEXT_PUBLIC_API_URL,
    //   },
    // ],
  },
  eslint: {
    dirs: ['src'],
  },
};

module.exports = nextConfig;
