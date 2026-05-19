import type { NextConfig } from "next";

const WP_ORIGIN = "https://wp.mummachelles.com.au";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/dlakvczje/**",
      },
    ],
  },
  async rewrites() {
    return [
      { source: "/wp-admin/:path*", destination: `${WP_ORIGIN}/wp-admin/:path*` },
      { source: "/wp-content/:path*", destination: `${WP_ORIGIN}/wp-content/:path*` },
      { source: "/wp-includes/:path*", destination: `${WP_ORIGIN}/wp-includes/:path*` },
      { source: "/blog/:path*", destination: `${WP_ORIGIN}/blog/:path*` },
      { source: "/product/:path*", destination: `${WP_ORIGIN}/product/:path*` },
      { source: "/shop/:path*", destination: `${WP_ORIGIN}/shop/:path*` },
    ];
  },
};

export default nextConfig;
