
import { withNextVideo } from "next-video/process";
const NEXT_PUBLIC_STATIC_GENERATION_TIMEOUT = process.env.NEXT_PUBLIC_STATIC_GENERATION_TIMEOUT || 120 * 2

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
  transpilePackages: ['three'],
  experimental: {
    staticPageGenerationTimeout:Number(NEXT_PUBLIC_STATIC_GENERATION_TIMEOUT)
  }
};

export default withNextVideo(nextConfig);