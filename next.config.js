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
});
