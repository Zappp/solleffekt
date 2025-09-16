import { MainPage } from 'app/components/pages/MainPage'
import { AppTemplate } from 'app/components/templates/AppTemplate'
import { AppData, Locale, MainPageData } from 'app/types/app'
import { notFound } from 'next/navigation'
import appData from '../data/appData.json'

export const defaultLocale: Locale = 'de'

export default async function Page() {
  const locales = Object.keys(appData)
  const page = appData[defaultLocale].pages.find((p) => p.type === 'main')

  if (!page) notFound()

  const pageData = page.data as MainPageData

  return (
    <AppTemplate
      data={(appData as AppData)[defaultLocale]}
      locale={defaultLocale}
      locales={locales}
    >
      <MainPage data={pageData} />
    </AppTemplate>
  )
}
