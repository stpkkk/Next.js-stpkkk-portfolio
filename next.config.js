/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    dirs: ["pages", "components"],
  },
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["example.com"],
  },
};

module.exports = nextConfig;
