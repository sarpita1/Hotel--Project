module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true, // Disable ESLint during build process
  },
};
