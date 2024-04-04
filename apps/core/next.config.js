const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
});

const withNextIntl = require("next-intl/plugin")();

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["shared-components"],
  images: {
    domains: [
      "d2fplzddl6myl4.cloudfront.net",
      "tailwindui.com",
      "stream.mux.com",
      "images.pexels.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "stream.mux.com",
      },
      {
        protocol: "https",
        hostname: "stripe.com",
      },
    ],
  },
  experimental: {
    taint: true, // For next-intl settings
  },
  logging: {
    fetches: { fullUrl: false },
  },
};

module.exports = withPWA(withNextIntl(nextConfig));
