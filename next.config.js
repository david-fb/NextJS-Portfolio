/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  images: {
    domains: ['i.pinimg.com', 'geekflare.com', 'www.salixdesigns.com'],
  },
};

module.exports = nextConfig;
