import { MainPageData } from 'app/types/app'
import { MainHeader } from '../sections/main/MainHeader'
import { MainMission } from '../sections/main/MainMission'
import { MainProducts } from '../sections/main/MainProducts'
import { MainWhyUs } from '../sections/main/MainWhyUs'
import { SharedOptimize } from '../sections/shared/SharedOptimize'

export function MainPage({ data }: { data: MainPageData }) {
  return (
    <>
      <MainHeader data={data.header} />
      <MainProducts data={data.products} />
      <MainWhyUs data={data.whyUs} />
      <MainMission data={data.mission} />
      <SharedOptimize data={data.optimize} />
    </>
  )
}
