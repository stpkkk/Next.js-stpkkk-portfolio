/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    dirs: ["pages", "components"],
  },
  images: {
    domains: ["example.com"],
  },
};

module.exports = nextConfig;
