import { MainPageData } from 'app/types/app'
import { MainOptimize } from '../sections/main/MainOptimize'
import { MainPartner } from '../sections/main/MainPartner'
import { MainProducts } from '../sections/main/MainProducts'
import { SectionSeparator } from '../sections/shared/SectionSeparator'

export function MainPage({ data }: { data: MainPageData }) {
  return (
    <>
      <MainProducts data={data.products} />
      <MainProducts data={data.solutions} />
      <MainPartner data={data.partner} />
      <SectionSeparator data={data.sectionSeparator} />
      <MainOptimize data={data.optimize} />
    </>
  )
}
