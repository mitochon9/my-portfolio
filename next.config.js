/**
 *  @type {import('next').NextConfig}
 * */
const nextConfig = {
  images: {
    domains: ["images.microcms-assets.io"],
  },
  i18n: { locales: ["ja"], defaultLocale: "ja" },
  future: { strictPostcssConfiguration: true },
  reactStrictMode: true,
  poweredByHeader: false,
  // swcMinify: true,
  // experimental: { concurrentFeatures: true, serverComponents: true },
};

module.exports = nextConfig;
