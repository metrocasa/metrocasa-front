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
        hostname: "cdn-metrocasa.s3.us-east-1.amazonaws.com"
      }
    ]
  },
};

export default withNextVideo(nextConfig);