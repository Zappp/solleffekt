import { Image } from '../ui/Image'

interface Feature {
  iconSrc: string
  iconAlt: string
  title: string
  description: string
}

interface SolutionsFeaturesProps {
  features: Feature[]
}

export function SolutionsFeatures({ features }: SolutionsFeaturesProps) {
  return (
    <section className="flex flex-wrap justify-center gap-8 py-8">
      {features.map((feature, idx) => (
        <div key={idx} className="flex w-full max-w-xs flex-col items-center gap-4 text-center">
          <div className="mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-3xl">
            <Image src={feature.iconSrc} alt={feature.iconAlt} className="h-8 w-8" />
          </div>
          <h3 className="typography-h3">{feature.title}</h3>
          <p className="typography-body">{feature.description}</p>
        </div>
      ))}
    </section>
  )
}
