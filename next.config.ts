import type { NextConfig } from 'next'

const isProd = process.env.NODE_ENV === 'production'
const basePath = isProd ? '/solleffekt' : ''

const nextConfig: NextConfig = {
  output: isProd ? 'export' : undefined,
  skipTrailingSlashRedirect: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
}

export default nextConfig
