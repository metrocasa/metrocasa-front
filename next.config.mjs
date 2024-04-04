import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "swiperjs.com"],
  },
};

export default withNextVideo(nextConfig);