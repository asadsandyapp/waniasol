import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Playwright hits 127.0.0.1 while dev server may report localhost — allow HMR */
  allowedDevOrigins: ["127.0.0.1"],
};

export default nextConfig;
