import { MainHeader, MainHeaderProps } from '../sections/main/MainHeader'
import { MainOptimize, MainOptimizePropsProps } from '../sections/main/MainOptimize'
import { MainPartner, MainPartnerProps } from '../sections/main/MainPartner'
import { MainProducts, MainProductsProps } from '../sections/main/MainProducts'
import { SectionSeparator, SectionSeparatorProps } from '../sections/shared/SectionSeparator'

export interface MainPageData {
  header: MainHeaderProps
  products: MainProductsProps
  solutions: MainProductsProps
  optimize: MainOptimizePropsProps
  sectionSeparator: SectionSeparatorProps
  partner: MainPartnerProps
}

export function MainPage({ data }: { data: MainPageData }) {
  return (
    <>
      <MainHeader data={data.header} />
      <MainProducts data={data.products} />
      <MainProducts data={data.solutions} />
      <MainPartner data={data.partner} />
      <SectionSeparator data={data.sectionSeparator} />
      <MainOptimize data={data.optimize} />
    </>
  )
}
