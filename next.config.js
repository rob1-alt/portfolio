/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

const withFonts = require('next-fonts');

module.exports = withFonts({
   enableSvg: true,
   webpack(config, options) {
     return config;
   }
}); 