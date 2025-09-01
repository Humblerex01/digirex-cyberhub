/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Allow only your production domain and localhost for dev
    allowedDevOrigins: [
      "http://localhost:3000",
      "https://digirexcyberhub.vercel.app",
      "https://www.digirexcyberhub.com", // replace with your custom domain
    ],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "digirexcyberhub.vercel.app",
      },
      {
        protocol: "https",
        hostname: "www.digirexcyberhub.com", // replace with your custom domain
      },
    ],
  },
  reactStrictMode: true, // good for catching bugs in dev
};

module.exports = nextConfig;
