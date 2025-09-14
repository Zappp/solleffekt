import { MainPage } from 'app/components/pages/MainPage'
import { AppTemplate } from 'app/components/templates/AppTemplate'
import { AppData, MainPageData } from 'app/types/app'
import fs from 'fs/promises'
import path from 'path'

export const defaultLocale = 'de'

export default async function Page() {
  const filePath = path.join(process.cwd(), 'src/data/appData.json')
  const jsonData = await fs.readFile(filePath, 'utf-8')
  const appData: AppData = JSON.parse(jsonData)
  const page = appData[defaultLocale].pages.find((p) => p.slug === '')

  if (!page) return

  const pageData = page.data as MainPageData

  return (
    <AppTemplate data={appData[defaultLocale]} locale={defaultLocale}>
      <MainPage data={pageData} />
    </AppTemplate>
  )
}
