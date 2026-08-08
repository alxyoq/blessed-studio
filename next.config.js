/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_SITE_URL:
      process.env.NEXT_PUBLIC_SITE_URL ||
      process.env.URL ||
      "https://blessed-studio.netlify.app",
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
