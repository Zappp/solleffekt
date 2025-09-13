import { MainHeaderProps } from 'app/components/sections/main/MainHeader'
import { MainMissionProps } from 'app/components/sections/main/MainMission'
import { ProductCard } from 'app/components/sections/main/MainProducts'
import { MainWhyUsProps } from 'app/components/sections/main/MainWhyUs'
import { ProductsHeaderProps } from 'app/components/sections/products/ProductsHeader'
import { ProductsSolutionsProps } from 'app/components/sections/products/ProductsSolutions'
import { SectionSeparatorProps } from 'app/components/sections/shared/SectionSeparator'
import { SharedOptimizeProps } from 'app/components/sections/shared/SharedOptimize'
import { Feature } from 'app/components/sections/solutions/SolutionsFeatures'
import { SolutionsHeaderProps } from 'app/components/sections/solutions/SolutionsHeader'
import { FooterProps } from 'app/components/ui/Footer'
import { NavbarProps } from 'app/components/ui/Navbar'

export interface MainPageData {
  header: MainHeaderProps
  products: { heading: string; items: ProductCard[] }
  whyUs: MainWhyUsProps
  mission: MainMissionProps
  optimize: SharedOptimizeProps
}

export interface ProductPageData {
  header: ProductsHeaderProps
  sectionSeparator: SectionSeparatorProps
  solutions: ProductsSolutionsProps
  partners: ProductsPartnerProps
  optimize: SharedOptimizeProps
}

export interface SolutionPageData {
  header: SolutionsHeaderProps
  features: Feature[]
}

export type PageData = MainPageData | ProductPageData | SolutionPageData

export type AppData = {
  navbar: NavbarProps
  footer: FooterProps
  pages: Array<{
    id: string
    slug: string
    type: 'main' | 'product' | 'solution'
    data: PageData
  }>
}
