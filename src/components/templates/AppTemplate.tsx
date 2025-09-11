import { ReactNode } from 'react'
import { Navbar } from '../ui/Navbar'

export function AppTemplate({ children }: { children: ReactNode }) {
  const navBarProps = {
    brand: { label: 'Solleffekt', href: '/', logoSrc: '/vercel.svg', logoAlt: 'Solleffekt' },
    items: [
      { label: 'Home', href: '/' },
      {
        label: 'Products',
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
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
  }
  return (
    <>
      <header className="bg-background/80 sticky top-0 z-50 border-b border-white/10 backdrop-blur">
        <Navbar brand={navBarProps.brand} items={navBarProps.items} />
      </header>

      <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6">{children}</main>
    </>
  )
}
