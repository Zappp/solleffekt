import { SolutionsPageData } from 'app/types/app'
import { ProductsHeader } from '../sections/shared/ProductsHeader'

export function SolutionsPage({ data }: { data: SolutionsPageData }) {
  return (
    <>
      <ProductsHeader data={data.header} />
    </>
  )
}
