/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['abiautocenter.de'], // Ihre tatsächliche Domain
  },
  eslint: {
    // Während der Entwicklung auf false setzen, für Production auf true
    ignoreDuringBuilds: true,
  },
  // Ihre anderen Konfigurationen...
}

module.exports = nextConfig