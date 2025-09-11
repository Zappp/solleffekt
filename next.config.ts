import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const isProd = process.env.NODE_ENV === 'production'
const basePath = isProd ? '/solleffekt' : ''

const withNextIntl = createNextIntlPlugin()

const nextConfig: NextConfig = {
  output: 'export',
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

export default withNextIntl(nextConfig)
