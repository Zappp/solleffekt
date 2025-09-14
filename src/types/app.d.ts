import { MainHeaderProps } from 'app/components/sections/main/MainHeader'
import { MainMissionProps } from 'app/components/sections/main/MainMission'
import { MainProductsProps } from 'app/components/sections/main/MainProducts'
import { MainWhyUsProps } from 'app/components/sections/main/MainWhyUs'
import { ProductsHeaderProps } from 'app/components/sections/products/ProductsHeader'
import { ProductsSolutionsProps } from 'app/components/sections/products/ProductsSolutions'
import { SectionSeparatorProps } from 'app/components/sections/shared/SectionSeparator'
import { SharedOptimizeProps } from 'app/components/sections/shared/SharedOptimize'
import { SolutionsFeaturesProps } from 'app/components/sections/solutions/SolutionsFeatures'
import { SolutionsHeaderProps } from 'app/components/sections/solutions/SolutionsHeader'
import { FooterProps } from 'app/components/ui/Footer'
import { NavbarProps } from 'app/components/ui/Navbar'

export interface MainPageData {
  header: MainHeaderProps
  products: MainProductsProps
  whyUs: MainWhyUsProps
  mission: MainMissionProps
  optimize: SharedOptimizeProps
}

export interface ProductsPageData {
  header: ProductsHeaderProps
  sectionSeparator: SectionSeparatorProps
  solutions: ProductsSolutionsProps
  partners: ProductsPartnerProps
  optimize: SharedOptimizeProps
}

export interface SolutionsPageData {
  header: SolutionsHeaderProps
  features: SolutionsFeaturesProps
}

export type PageData = MainPageData | ProductsPageData | SolutionsPageData

export type AppData = {
  navbar: NavbarProps
  footer: FooterProps
  pages: Array<{
    id: string
    slug: string
    data: PageData
  }>
}
