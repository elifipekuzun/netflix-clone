/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['occ-0-56-55.1.nflxso.net', 'occ-0-2773-1490.1.nflxso.net','occ-0-114-116.1.nflxso.net']
  }
}

module.exports = nextConfig
