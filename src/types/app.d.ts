import { ImprintPageData } from 'app/components/pages/ImprintPage'
import { MainPageData } from 'app/components/pages/MainPage'
import { PrivacyPolicyPageData } from 'app/components/pages/PrivacyPolicyPage'
import { ProductsPageData } from 'app/components/pages/ProductsPage'
import { FooterProps } from 'app/components/ui/Footer'
import { NavbarProps } from 'app/components/ui/Navbar'

export type AppData = Record<Locale, DocumentData>

export type Locale = 'en' | 'de'

export type DocumentData = {
  navbar: NavbarProps
  footer: FooterProps
  pages: Array<{
    id: string
    slug: string
    data: PageData
    type: PageType
  }>
}

export type PageData = MainPageData | ProductsPageData | ImprintPageData | PrivacyPolicyPageData

export type PageType = 'main' | 'products' | 'imprint' | 'privacy-policy'
