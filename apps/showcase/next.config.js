/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@nh-ui/ui", "@nh-ui/auth", "@nh-ui/api"],
};

module.exports = nextConfig;