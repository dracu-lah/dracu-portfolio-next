import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Allow images from any hostname
      },
    ],
  },
};

export default nextConfig;
