/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export — all pages are pre-rendered to HTML/CSS/JS in the `out/` folder.
  // Cloudflare Pages serves the `out/` directory directly. No server or deploy command needed.
  output: 'export',
  trailingSlash: true,
  images: {
    // Static export requires unoptimized images (no server-side image optimization API)
    unoptimized: true,
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  experimental: {
    optimizeCss: true,
  },
}

module.exports = nextConfig
