/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "luxesculptperformance.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;