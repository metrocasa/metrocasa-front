import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {
  
  images: {
    domains: ["localhost", "res.cloudinary.com"],
  },
};

export default withNextVideo(nextConfig);