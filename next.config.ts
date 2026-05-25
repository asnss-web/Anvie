import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: process.env.NODE_ENV === "production" ? "/Anvie" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/Anvie/" : "",
};

export default nextConfig;
