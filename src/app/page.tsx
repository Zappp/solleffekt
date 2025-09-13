import GlobalNotFound from 'app/app/global-not-found'
import { MainHeader } from 'app/components/sections/main/MainHeader'
import { MainMission } from 'app/components/sections/main/MainMission'
import { MainProducts } from 'app/components/sections/main/MainProducts'
import { MainWhyUs } from 'app/components/sections/main/MainWhyUs'
import { SharedOptimize } from 'app/components/sections/shared/SharedOptimize'
import { AppData, MainPageData, PageData } from 'app/types/app'
import fs from 'fs/promises'
import path from 'path'
import { ReactNode } from 'react'

function renderPage(page: { type: 'main' | 'product' | 'solution'; data: PageData }): ReactNode {
  switch (page.type) {
    case 'main': {
      const data = page.data as MainPageData
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
    default:
      return GlobalNotFound()
  }
}

export default async function Home() {
  const filePath = path.join(process.cwd(), 'src/data/appData.json')
  const jsonData = await fs.readFile(filePath, 'utf-8')
  const appData: AppData = JSON.parse(jsonData)
  const homePage = appData.pages.find((p) => p.slug === '')

  if (!homePage || homePage.type !== 'main') {
    return GlobalNotFound()
  }

  return renderPage(homePage)
}
