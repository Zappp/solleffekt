import { Image } from 'app/components/ui/Image'

export interface Feature {
  iconSrc: string
  iconAlt: string
  title: string
  description: string
}

export function SolutionsFeatures({ data }: { data: Feature[] }) {
  return (
    <section className="section-layout flex flex-wrap justify-center gap-8 py-8">
      {data.map((feature, idx) => (
        <div
          key={idx}
          className="flex w-full max-w-xs flex-col items-center gap-4 text-center"
          data-aos="fade-up"
        >
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
