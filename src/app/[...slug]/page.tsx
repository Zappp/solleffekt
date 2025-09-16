import { MainPage } from 'app/components/pages/MainPage'
import { ProductsPage } from 'app/components/pages/ProductsPage'
import { SolutionsPage } from 'app/components/pages/SolutionsPage'
import { AppTemplate } from 'app/components/templates/AppTemplate'
import {
  AppData,
  MainPageData,
  ProductsPageData,
  SolutionsPageData,
  Page as TPage,
} from 'app/types/app'
import appData from '../../data/appData.json'
import { defaultLocale } from '../page'

export const dynamicParams = false

export async function generateStaticParams() {
  return Object.values(appData as AppData)
    .flatMap((pages: TPage) =>
      pages.pages.map(({ slug }) => ({ slug: slug.split('/').filter(Boolean) })),
    )
    .filter(({ slug }) => slug.length)
}

export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
  const resolvedParams = await params

  const locales = Object.keys(appData)
  const fullSlug = resolvedParams.slug.join('/')
  const locale = locales.find((l) => fullSlug.includes(l)) ?? defaultLocale

  const page = (appData as AppData)[locale].pages.find((p) => p.slug === fullSlug)

  if (!page) return

  let content = <></>

  if (locales.some((locale) => locale === page.slug)) {
    const pageData = page.data as MainPageData
    content = <MainPage data={pageData} />
  }

  const parsedSlug = page.slug.replace(`${locale}/`, '')

  if (/^products\/+/.test(parsedSlug)) {
    const pageData = page.data as ProductsPageData
    content = <ProductsPage data={pageData} />
  }

  if (/^solutions\/+/.test(parsedSlug)) {
    const pageData = page.data as SolutionsPageData
    content = <SolutionsPage data={pageData} />
  }

  return (
    <AppTemplate data={(appData as AppData)[locale]} locale={locale} locales={locales}>
      {content}
    </AppTemplate>
  )
}
