import { ReactNode } from 'react'
import { Footer, FooterProps } from '../ui/Footer'
import { Navbar, NavbarProps } from '../ui/Navbar'
import { AOS } from '../utils/AOS'
import { SetHTMLLangAttribute } from '../utils/SetHTMLLangAttribute'

export function AppTemplate({
  children,
  data: { footer, navbar },
  locale,
}: {
  children: ReactNode
  data: {
    footer: FooterProps
    navbar: NavbarProps
  }
  locale: string
}) {
  return (
    <>
      <AOS />
      <SetHTMLLangAttribute locale={locale} />
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
