import { MainPage } from 'app/components/pages/MainPage'
import { AppTemplate } from 'app/components/templates/AppTemplate'
import { AppData, MainPageData } from 'app/types/app'
import appData from '../data/appData.json'

export const defaultLocale = 'de'

export default async function Page() {
  const locales = Object.keys(appData)
  const page = appData[defaultLocale].pages.find((p) => p.slug === '')

  if (!page) return

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
