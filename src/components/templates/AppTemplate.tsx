import { ReactNode } from 'react'
import { CookieConsent, CookieConsentProps } from '../ui/CookieConsent'
import { Footer, FooterProps } from '../ui/Footer'
import { LocaleSwitcher } from '../ui/LocaleSwitcher'
import { Navbar, NavbarProps } from '../ui/Navbar'
import { AOS } from '../utils/AOS'

export function AppTemplate({
  children,
  data: { footer, navbar, cookieConsent },
  locale,
  locales,
}: {
  children: ReactNode
  data: {
    footer: FooterProps
    navbar: NavbarProps
    cookieConsent: CookieConsentProps
  }
  locale: string
  locales: string[]
}) {
  return (
    <>
      <AOS />
      <LocaleSwitcher locales={locales} />
      <CookieConsent cookieConsent={cookieConsent} />
      <header
        lang={locale}
        className="sticky top-0 z-30 border-b border-neutral-200 bg-white backdrop-blur"
      >
        <Navbar data={navbar} />
      </header>
      <main lang={locale}>{children}</main>
      <footer lang={locale} className="relative mt-12 w-full bg-white/80">
        <Footer data={footer} />
      </footer>
    </>
  )
}
