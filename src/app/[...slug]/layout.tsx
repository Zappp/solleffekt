import { AppTemplate } from 'app/components/templates/AppTemplate'
import { AppData, DocumentData, Locale } from 'app/types/app'
import { ReactNode } from 'react'
import appData from '../../data/appData.json'
import { defaultLocale } from '../page'

export async function generateStaticParams() {
  return Object.values(appData as AppData)
    .flatMap((pages: DocumentData) =>
      pages.pages.map(({ slug }) => ({ slug: slug.split('/').filter(Boolean) })),
    )
    .filter(({ slug }) => slug.length)
}

export default async function Layout({
  params,
  children,
}: {
  params: Promise<{ slug: string[] }>
  children: ReactNode
}) {
  const resolvedParams = await params

  const locales = Object.keys(appData) as Locale[]
  const fullSlug = resolvedParams.slug.join('/')
  const locale = locales.find((l) => new RegExp(`^${l}(?:/|$)`).test(fullSlug)) ?? defaultLocale

  return (
    <AppTemplate data={(appData as AppData)[locale]} locale={locale} locales={locales}>
      {children}
    </AppTemplate>
  )
}
