const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  experimental: {
    outputStandalone: true,
  },
  future: {
    webpack5: true,
  },
  images: {
    deviceSizes: [1920, 2048, 3840],
  },
});
