import { SolutionPageData } from 'app/types/app'
import { SolutionsFeatures } from '../sections/solutions/SolutionsFeatures'
import { SolutionsHeader } from '../sections/solutions/SolutionsHeader'

export function SolutionsPage({ data }: { data: SolutionPageData }) {
  return (
    <>
      <SolutionsHeader data={data.header} />
      <SolutionsFeatures data={data.features} />
    </>
  )
}
