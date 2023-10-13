/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js','jsx'],
  reactStrictMode: true,
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  },
  env:{
    SECRET_TOKEN:"Quiz_client",
    IMAGE_PATH:'http://localhost:5000'
  },
  images: {
    domains: ['localhost'],
  },

 
}

module.exports = nextConfig
