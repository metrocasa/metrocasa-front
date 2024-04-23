import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',
  images: {
    remotePatterns: [
      {
        protocol: "http",
      hostname: "localhost"
      },
      {
        protocol: "https",
      hostname: "metrocasa-strapi.onrender.com"
      },
    ]
  },
};

export default withNextVideo(nextConfig);