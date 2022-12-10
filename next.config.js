/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const withFonts = require('next-fonts');

module.exports = withFonts({
   enableSvg: true,
   webpack(config, options) {
     return config;
   }
}); 

module.exports = nextConfig

