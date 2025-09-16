import type { Metadata } from 'next'
import './globals.css'
import { defaultLocale } from './page'

export const metadata: Metadata = {
  title: 'Sollefect',
  description: 'Wir montieren Solarmodule führender Weltmarken nach deutschen Normen.',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang={defaultLocale}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
