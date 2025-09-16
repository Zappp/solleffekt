import { MainOptimizePropsProps } from 'app/components/sections/main/MainOptimize'
import { MainPartnerProps } from 'app/components/sections/main/MainPartner'
import { MainProductsProps } from 'app/components/sections/main/MainProducts'
import { ProductsHeaderProps } from 'app/components/sections/shared/ProductsHeader'
import { SectionSeparatorProps } from 'app/components/sections/shared/SectionSeparator'
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
    type: 'main' | 'products' | 'solutions'
  }>
}

export type PageData = MainPageData | ProductsPageData | SolutionsPageData

export interface MainPageData {
  products: MainProductsProps
  solutions: MainProductsProps
  optimize: MainOptimizePropsProps
  sectionSeparator: SectionSeparatorProps
  partner: MainPartnerProps
}

export interface ProductsPageData {
  header: ProductsHeaderProps
}

export interface SolutionsPageData {
  header: ProductsHeaderProps
}
