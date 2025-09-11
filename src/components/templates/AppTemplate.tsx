import { ReactNode } from 'react'
import { Navbar, NavbarItem } from '../ui/Navbar'

export function AppTemplate({ children }: { children: ReactNode }) {
  const navBarProps = {
    brand: { label: 'Solleffekt', href: '/', logoSrc: '/logo.png', logoAlt: 'Solleffekt' },
    items: [
      { type: 'link' as const, label: 'Home', href: '/' },
      {
        type: 'link' as const,
        label: 'Products',
        href: '/products',
        children: [
          {
            label: 'Solar Panels',
            href: '/products/solar-panels',
            description: 'High-efficiency modules',
          },
          {
            label: 'Inverters',
            href: '/products/inverters',
            description: 'Reliable energy conversion',
          },
          {
            label: 'Batteries',
            href: '/products/batteries',
            description: 'Store surplus energy',
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
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-indigo-200/60 bg-white/80 backdrop-blur">
        <Navbar brand={navBarProps.brand} items={navBarProps.items} />
      </header>

      <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6">{children}</main>
    </>
  )
}
