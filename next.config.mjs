// next.config.mjs
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "luxesculptperformance.com",
        pathname: "/**"
      }
    ]
  }
};

export default nextConfig;

