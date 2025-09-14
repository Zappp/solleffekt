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
import fs from 'fs/promises'
import path from 'path'
import { defaultLocale } from '../page'

export const dynamicParams = false

export async function generateStaticParams() {
  const filePath = path.join(process.cwd(), 'src/data/appData.json')
  const jsonData = await fs.readFile(filePath, 'utf-8')
  const appData: AppData = JSON.parse(jsonData)

  const allSlugs = Object.values(appData).flatMap((pages: TPage) =>
    pages.pages.map(({ slug }) => ({ slug: slug.split('/') })),
  )

  // filter root page for default translation
  return allSlugs.filter(({ slug }) => !(slug.length === 1 && slug[0] === ''))
}

export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
  const resolvedParams = await params

  const filePath = path.join(process.cwd(), 'src/data/appData.json')
  const jsonData = await fs.readFile(filePath, 'utf-8')
  const appData: AppData = JSON.parse(jsonData)

  const locales = Object.keys(appData)

  const fullSlug = resolvedParams.slug.join('/')
  const locale = locales.find((l) => fullSlug.includes(l)) ?? defaultLocale

  const page = appData[locale].pages.find((p) => p.slug === fullSlug)

  if (!page) return

  let content

  // root page for other than default translations
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
    <AppTemplate data={appData[locale]} locale={locale}>
      {content}
    </AppTemplate>
  )
}
