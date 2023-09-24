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
          {
            protocol: 'https',
            hostname: 'tecdn.b-cdn.net',
            port: '',
            pathname: '/img/**',
          },
        ],
      },
};

module.exports = nextConfig;
