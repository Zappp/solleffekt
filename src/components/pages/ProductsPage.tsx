import { ProductsPageData } from 'app/types/app'
import { ProductsHeader } from '../sections/products/ProductsHeader'
import { ProductsPartner } from '../sections/products/ProductsPartner'
import { ProductsSolutions } from '../sections/products/ProductsSolutions'
import { SectionSeparator } from '../sections/shared/SectionSeparator'
import { SharedOptimize } from '../sections/shared/SharedOptimize'

export function ProductsPage({ data }: { data: ProductsPageData }) {
  return (
    <>
      <ProductsHeader data={data.header} />
      <SectionSeparator data={data.sectionSeparator} />
      <ProductsSolutions data={data.solutions} />
      <ProductsPartner data={data.partners} />
      <SharedOptimize data={data.optimize} />
    </>
  )
}
