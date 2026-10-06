/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Lets a production build run beside `next dev` without both writing to .next.
  // When set, the static export lands in that folder instead of out/; deploy that folder.
  distDir: process.env.NEXT_DIST_DIR || '.next',
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
