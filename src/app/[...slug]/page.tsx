import { ImprintPage, ImprintPageData } from 'app/components/pages/ImprintPage'
import { MainPage, MainPageData } from 'app/components/pages/MainPage'
import { PrivacyPolicyPage, PrivacyPolicyPageData } from 'app/components/pages/PrivacyPolicyPage'
import { ProductsPage } from 'app/components/pages/ProductsPage'
import { ProductsPageData, SolutionsPage } from 'app/components/pages/SolutionsPage'
import { AppData, DocumentData, Locale } from 'app/types/app'
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

  const locales = Object.keys(appData) as Locale[]
  const fullSlug = resolvedParams.slug.join('/')
  const locale = locales.find((l) => new RegExp(`^${l}(?:/|$)`).test(fullSlug)) ?? defaultLocale

  const page = (appData as AppData)[locale].pages.find((p) => p.slug === fullSlug)

  if (!page) notFound()

  if (page.type === 'main') return <MainPage data={page.data as MainPageData} />
  if (page.type === 'products') return <ProductsPage data={page.data as ProductsPageData} />
  if (page.type === 'solutions') return <SolutionsPage data={page.data as ProductsPageData} />
  if (page.type === 'imprint') return <ImprintPage data={page.data as ImprintPageData} />
  if (page.type === 'privacy-policy')
    return <PrivacyPolicyPage data={page.data as PrivacyPolicyPageData} />

  return notFound()
}
