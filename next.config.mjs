import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',
  images: {
    remotePatterns: [
      {
        protocol: "http",
      hostname: "localhost"
      }
    ]
  },
};

export default withNextVideo(nextConfig);