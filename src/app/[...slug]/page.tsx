import { ImprintPage } from 'app/components/pages/ImprintPage'
import { MainPage } from 'app/components/pages/MainPage'
import { PrivacyPolicyPage } from 'app/components/pages/PrivacyPolicyPage'
import { ProductsPage } from 'app/components/pages/ProductsPage'
import { SolutionsPage } from 'app/components/pages/SolutionsPage'
import { AppData, ContentMap, DocumentData, Locale } from 'app/types/app'
import { notFound } from 'next/navigation'
import { ComponentType } from 'react'
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

  const PageComponent = pageComponent[page.type]
  return <PageComponent data={page.data as ContentMap[keyof typeof page.data]} />
}

export const pageComponent: {
  [K in keyof ContentMap]: ComponentType<{ data: ContentMap[K] }>
} = {
  main: MainPage,
  products: ProductsPage,
  solutions: SolutionsPage,
  imprint: ImprintPage,
  'privacy-policy': PrivacyPolicyPage,
}
