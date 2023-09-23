/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'freeimghost.net',
            port: '',
            pathname: '/images/**',
          },
        ],
      },
};

module.exports = nextConfig;
