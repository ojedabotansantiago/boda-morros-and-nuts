/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: 'https://boda-irene-y-guillermo.web.app/',
  }
}

module.exports = nextConfig
