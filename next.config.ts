import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/ericg-cv",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
