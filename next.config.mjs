import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',
  images: {
    domains: ["localhost", "res.cloudinary.com", "img.clerk.com"],
  },
};

export default withNextVideo(nextConfig);