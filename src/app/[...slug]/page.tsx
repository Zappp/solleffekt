import { MainPage } from 'app/components/pages/MainPage'
import { ProductsPage } from 'app/components/pages/ProductsPage'
import { SolutionsPage } from 'app/components/pages/SolutionsPage'
import { AppTemplate } from 'app/components/templates/AppTemplate'
import {
  AppData,
  DocumentData,
  Locale,
  MainPageData,
  ProductsPageData,
  SolutionsPageData,
} from 'app/types/app'
import { notFound } from 'next/navigation'
import appData from '../../data/appData.json'
import { defaultLocale } from '../page'

export const dynamicParams = false

export async function generateStaticParams() {
  return Object.values(appData as AppData)
    .flatMap((pages: DocumentData) =>
      pages.pages.map(({ slug }) => ({ slug: slug.split('/').filter(Boolean) })),
    )
    .filter(({ slug }) => slug.length)
}

export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
  const resolvedParams = await params

  const locales = Object.keys(appData)
  const fullSlug = resolvedParams.slug.join('/')
  const locale =
    (locales.find((l) => new RegExp(`^${l}(?:/|$)`).test(fullSlug)) as Locale) ?? defaultLocale

  const page = (appData as AppData)[locale].pages.find((p) => p.slug === fullSlug)

  if (!page) notFound()

  let content = <></>

  if (page.type === 'main') {
    const pageData = page.data as MainPageData
    content = <MainPage data={pageData} />
  }

  if (page.type === 'products') {
    const pageData = page.data as ProductsPageData
    content = <ProductsPage data={pageData} />
  }

  if (page.type === 'solutions') {
    const pageData = page.data as SolutionsPageData
    content = <SolutionsPage data={pageData} />
  }

  return (
    <AppTemplate data={(appData as AppData)[locale]} locale={locale} locales={locales}>
      {content}
    </AppTemplate>
  )
}
