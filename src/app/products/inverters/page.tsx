import { SolutionsFeatures } from 'app/components/sections/SolutionsFeatures'
import { SolutionsHeader } from 'app/components/sections/SolutionsHeader'

export default function InvertersPage() {
  return (
    <>
      <SolutionsHeader
        uptitle="Inverters"
        title="Reliable Inverters for Every Solar Solution"
        description="Our inverters ensure maximum efficiency and reliability for your solar installation. Discover our range of products tailored for residential and commercial needs."
        buttonLabel="See All Inverters"
        buttonHref="/products/inverters/list"
      />
      <SolutionsFeatures
        features={[
          {
            iconSrc: '/logo.png',
            iconAlt: 'Efficiency',
            title: 'High Efficiency',
            description:
              'Benefit from our independent partner network for detailed energy audits and targeted consultations without being tied to specific products.',
          },
          {
            iconSrc: '/logo.png',
            iconAlt: 'Safe & Reliable',
            title: 'Safe & Reliable',
            description:
              'Benefit from our independent partner network for detailed energy audits and targeted consultations without being tied to specific products.',
          },
          {
            iconSrc: '/logo.png',
            iconAlt: 'Easy Installation',
            title: 'Easy Installation',
            description:
              'Benefit from our independent partner network for detailed energy audits and targeted consultations without being tied to specific products.',
          },
        ]}
      />
    </>
  )
}
