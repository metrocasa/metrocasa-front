
import { withNextVideo } from "next-video/process";
const NEXT_PUBLIC_STATIC_GENERATION_TIMEOUT = process.env.NEXT_PUBLIC_STATIC_GENERATION_TIMEOUT || 120

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
  staticPageGenerationTimeout: NEXT_PUBLIC_STATIC_GENERATION_TIMEOUT,
  transpilePackages: ['three'],

};

export default withNextVideo(nextConfig);