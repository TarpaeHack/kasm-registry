/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'DKDC Repo',
    description: 'DKDC Repo For Kasm',
    icon: '/img/logo.svg',
    listUrl: 'https://dkdc.github.io/kasm-registry/',
    contactUrl: 'https://kasmweb.com/support',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
