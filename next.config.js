/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  trailingSlash: false,
  images: {
    // Static export: images are pre-optimised by scripts/optimize-images.mjs
    loader: 'custom',
    loaderFile: './src/lib/imageLoader.js',
    deviceSizes: [640, 960, 1280],
    imageSizes: [384],
  },
};

module.exports = nextConfig;
