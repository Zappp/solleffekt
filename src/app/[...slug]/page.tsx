import { ProductsHeader } from 'app/components/sections/products/ProductsHeader'
import { ProductsPartner } from 'app/components/sections/products/ProductsPartner'
import { ProductsSolutions } from 'app/components/sections/products/ProductsSolutions'
import { SectionSeparator } from 'app/components/sections/shared/SectionSeparator'
import { SharedOptimize } from 'app/components/sections/shared/SharedOptimize'
import { SolutionsFeatures } from 'app/components/sections/solutions/SolutionsFeatures'
import { SolutionsHeader } from 'app/components/sections/solutions/SolutionsHeader'
import { AppData, ProductPageData, SolutionPageData } from 'app/types/app'
import fs from 'fs/promises'
import path from 'path'
import { ReactNode } from 'react'
import GlobalNotFound from '../global-not-found'

export async function generateStaticParams() {
  return [{ slug: ['products', 'solar-panels'] }, { slug: ['solutions', 'inverters'] }]
}

function renderPage(
  pageType: 'product' | 'solution',
  data: ProductPageData | SolutionPageData,
): ReactNode {
  switch (pageType) {
    case 'product': {
      const productData = data as ProductPageData
      return (
        <>
          <ProductsHeader data={productData.header} />
          <SectionSeparator data={productData.sectionSeparator} />
          <ProductsSolutions data={productData.solutions} />
          <ProductsPartner data={productData.partners} />
          <SharedOptimize data={productData.optimize} />
        </>
      )
    }
    case 'solution': {
      const solutionData = data as SolutionPageData
      return (
        <>
          <SolutionsHeader data={solutionData.header} />
          <SolutionsFeatures data={{ features: solutionData.features }} />
        </>
      )
    }
    default:
      return GlobalNotFound()
  }
}

export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
  const resolvedParams = await params
  const filePath = path.join(process.cwd(), 'src/data/appData.json')
  const jsonData = await fs.readFile(filePath, 'utf-8')
  const appData: AppData = JSON.parse(jsonData)

  const fullSlug = resolvedParams.slug.join('/')

  let pageType: 'product' | 'solution' | undefined
  if (fullSlug.startsWith('products')) {
    pageType = 'product'
  } else if (fullSlug.startsWith('solutions')) {
    pageType = 'solution'
  }

  if (!pageType) return GlobalNotFound()

  const page = appData.pages.find((p) => p.slug === fullSlug && p.type === pageType)

  if (!page) return GlobalNotFound()

  const renderablePageData = page.data as ProductPageData | SolutionPageData
  return renderPage(pageType, renderablePageData)
}
