import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false, // Keep URLs without trailing slash so sitemap and canonicals stay consistent
};

export default nextConfig;
