/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@uibrium/ui'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  // Ensure we optimize for production
  poweredByHeader: false,
  reactStrictMode: true,
};

module.exports = nextConfig;
