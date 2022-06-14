/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    STRAPI_KEY: process.env.NEXT_PUBLIC_STRAPI_KEY
  },
  images: {
    domains: ['localhost']
  }
}

module.exports = nextConfig
