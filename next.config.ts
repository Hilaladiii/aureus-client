import { env } from "@/common/lib/env";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  productionBrowserSourceMaps: false,
  experimental: {
    serverSourceMaps: false,
    proxyClientMaxBodySize: "10mb",
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8333",
        pathname: "/images/**",
      },
    ],
  },
  typedRoutes: true,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: env.NEXT_PUBLIC_BASE_API_URL,
      },
    ];
  },
};

export default nextConfig;
