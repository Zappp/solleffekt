import { ProductsPageData } from 'app/types/app'
import { ProductsHeader } from '../sections/shared/ProductsHeader'

export function ProductsPage({ data }: { data: ProductsPageData }) {
  return (
    <>
      <ProductsHeader data={data.header} />
    </>
  )
}
