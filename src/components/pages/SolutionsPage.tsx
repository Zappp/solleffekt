import { ProductsHeaderProps } from '../sections/products/ProductsHeader'
import { SolutionsHeader } from '../sections/solutions/SolutionsHeader'

export interface ProductsPageData {
  header: ProductsHeaderProps
}

export function SolutionsPage({ data }: { data: ProductsPageData }) {
  return (
    <>
      <SolutionsHeader data={data.header} />
    </>
  )
}
