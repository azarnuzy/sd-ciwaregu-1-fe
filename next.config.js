/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    API_KEY: process.env.API_KEY,
    API_URL: process.env.API_URL,
  },
  images: {
    domains: ['res.cloudinary.com', 'i.stack.imgur.com'],
  },
}

module.exports = nextConfig
