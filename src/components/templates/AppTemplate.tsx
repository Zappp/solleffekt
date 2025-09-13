import { ReactNode } from 'react'
import { Footer } from '../ui/Footer'
import { Navbar, NavbarItem } from '../ui/Navbar'

//TODO fix section separator image on mobile

export function AppTemplate({ children }: { children: ReactNode }) {
  const navBarProps = {
    brand: { label: 'Solleffekt', href: '/', logoSrc: '/logo.png', logoAlt: 'Solleffekt' },
    items: [
      { type: 'link' as const, label: 'Home', href: '/' },
      {
        type: 'link' as const,
        label: 'Products',
        href: '/products',
        segments: [
          {
            title: 'Products',
            children: [
              {
                label: 'Solar Panels',
                href: '/products/solar-panels',
                description: 'High-efficiency modules',
              },
            ],
          },
          {
            title: 'Solutions',
            children: [
              {
                label: 'Batteries',
                href: '/solutions/inverters',
                description: 'Store surplus energy',
              },
              {
                label: 'Inverters',
                href: '/solutions/inverters',
                description: 'Reliable energy conversion',
              },
            ],
          },
        ],
      },
      { type: 'link' as const, label: 'About', href: '/about' },
      {
        type: 'button' as const,
        label: 'Contact',
        action: 'email' as const,
        email: 'contact@solleffekt.com',
      },
    ] satisfies NavbarItem[],
  }

  const footerProps = {
    logo: {
      src: '/logo.png',
      alt: 'Solleffekt Logo',
      width: 160,
      height: 64,
    },
    links: [
      { href: '/about', label: 'About Us' },
      { href: '/blog', label: 'Blog' },
      { href: '/imprint', label: 'Imprint' },
      { href: '/privacy-policy', label: 'Privacy Policy' },
    ],
    leftInfo: '© 2025 Solleffekt. All Rights Reserved.',
    rightInfo: 'Made by Solleffekt & Powered by Something',
  }

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-indigo-200/60 bg-white/80 backdrop-blur">
        <Navbar {...navBarProps} />
      </header>

      <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6">{children}</main>

      <footer className="relative mt-12 w-full bg-white/80">
        <Footer {...footerProps} />
      </footer>
    </>
  )
}
