import { ProductsHeader, ProductsHeaderProps } from '../sections/products/ProductsHeader'

export interface ProductsPageData {
  header: ProductsHeaderProps
}

export function ProductsPage({ data }: { data: ProductsPageData }) {
  return (
    <>
      <ProductsHeader data={data.header} />
    </>
  )
}
