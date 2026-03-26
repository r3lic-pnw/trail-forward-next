import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL(
        "https://1bpfird42eanbnd7.public.blob.vercel-storage.com/**",
        "https://1bpfird42eanbnd7.public.blob.vercel-storage.com/images/**",
      ),
    ],
  },
};

export default nextConfig;
