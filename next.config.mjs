/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // basePath: '/fsb-app',
  // assetPrefix: '/fsb-app/'
};

export default nextConfig;