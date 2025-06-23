/** @type {import('next').NextConfig} */
const nextConfig = {
  matcher: ['/admin/:path*'],
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['raw.githubusercontent.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        pathname: '/etan-nestor/audio-files/raw/main/**',
      },
    ],
  },
}

export default nextConfig