/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname:
          "/images/9fhnx7v3/production/c946b693b9f9bee92ac6a700bcecd84cc8c6c35f-2754x2754.jpg",
      },
      {
        protocol: "https",
        hostname: "v1.tailwindcss.com",
        port: "",
        pathname: "/img/card-top.jpg",
      },
      {
        protocol: "https",
        hostname: "cloud.appwrite.io",
        port: "",
        pathname:
          "/v1/storage/buckets/**",
      },
    ],
  },
};

module.exports = nextConfig;
