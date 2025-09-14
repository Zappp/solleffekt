import { MainPage } from 'app/components/pages/MainPage'
import { AppData, MainPageData } from 'app/types/app'
import fs from 'fs/promises'
import { notFound } from 'next/navigation'
import path from 'path'

export default async function Home() {
  const filePath = path.join(process.cwd(), 'src/data/appData.json')
  const jsonData = await fs.readFile(filePath, 'utf-8')
  const appData: AppData = JSON.parse(jsonData)
  const page = appData.pages.find((p) => p.slug === '')

  if (!page) notFound()

  const pageData = page.data as MainPageData

  return <MainPage data={pageData} />
}
