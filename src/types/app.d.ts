import { ImprintPageData } from 'app/components/pages/ImprintPage'
import { MainPageData } from 'app/components/pages/MainPage'
import { PrivacyPolicyPageData } from 'app/components/pages/PrivacyPolicyPage'
import { ProductsPageData } from 'app/components/pages/ProductsPage'
import { CookieConsentProps } from 'app/components/ui/CookieConsent'
import { FooterProps } from 'app/components/ui/Footer'
import { NavbarProps } from 'app/components/ui/Navbar'
import { ValueOf } from 'next/dist/shared/lib/constants'

export type AppData = Record<Locale, DocumentData>

export type Locale = 'en' | 'de'

export type DocumentData = {
  navbar: NavbarProps
  footer: FooterProps
  cookieConsent: CookieConsentProps
  pages: PageData[]
}

export interface PageData {
  id: string
  slug: string
  type: keyof ContentMap
  data: ValueOf<ContentMap>
}

export type ContentMap = {
  main: MainPageData
  products: ProductsPageData
  solutions: ProductsPageData
  imprint: ImprintPageData
  'privacy-policy': PrivacyPolicyPageData
}
