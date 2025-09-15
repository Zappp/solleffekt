import { MainPageData } from 'app/types/app'
import { MainHeader } from '../sections/main/MainHeader'
import { MainProducts } from '../sections/main/MainProducts'
import { MainWhyUs } from '../sections/main/MainWhyUs'
import { SharedOptimize } from '../sections/shared/SharedOptimize'

export function MainPage({ data }: { data: MainPageData }) {
  return (
    <>
      <MainHeader data={data.header} />
      <MainProducts data={data.products} />
      <MainWhyUs data={data.whyUs} />
      <SharedOptimize data={data.optimize} />
    </>
  )
}
