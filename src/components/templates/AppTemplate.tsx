import { ReactNode } from 'react'
import { Footer, FooterProps } from '../ui/Footer'
import { Navbar, NavbarProps } from '../ui/Navbar'

export function AppTemplate({
  children,
  data: { footer, navbar },
}: {
  children: ReactNode
  data: {
    footer: FooterProps
    navbar: NavbarProps
  }
}) {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-indigo-200/60 bg-white/80 backdrop-blur">
        <Navbar data={navbar} />
      </header>
      <main>{children}</main>
      <footer className="relative mt-12 w-full bg-white/80">
        <Footer data={footer} />
      </footer>
    </>
  )
}
