import { ProductsPage } from 'app/components/pages/ProductsPage'
import { SolutionsPage } from 'app/components/pages/SolutionsPage'
import { AppData, ProductPageData, SolutionPageData } from 'app/types/app'
import fs from 'fs/promises'
import { notFound } from 'next/navigation'
import path from 'path'

export async function generateStaticParams() {
  const filePath = path.join(process.cwd(), 'src/data/appData.json')
  const jsonData = await fs.readFile(filePath, 'utf-8')
  const appData: AppData = JSON.parse(jsonData)

  return appData.pages
    .filter((p) => p.slug)
    .map((p) => ({
      slug: p.slug.split('/'),
    }))
}

export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
  const resolvedParams = await params
  const filePath = path.join(process.cwd(), 'src/data/appData.json')
  const jsonData = await fs.readFile(filePath, 'utf-8')
  const appData: AppData = JSON.parse(jsonData)

  const fullSlug = resolvedParams.slug.join('/')
  const page = appData.pages.find((p) => p.slug === fullSlug)

  if (!page) notFound()

  if (/^products\/+/.test(page.slug)) {
    const pageData = page.data as ProductPageData
    return <ProductsPage data={pageData} />
  }

  if (/^solutions\/+/.test(page.slug)) {
    const pageData = page.data as SolutionPageData
    return <SolutionsPage data={pageData} />
  }

  notFound()
}
