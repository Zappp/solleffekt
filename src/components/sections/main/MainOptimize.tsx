import { Image } from 'app/components/ui/Image'

export type OptimizeItem = {
  id: string
  iconSrc: string
  iconAlt: string
  description: string
}

export type MainOptimizePropsProps = {
  overline: string
  title: string
  subtitle: string
  imageSrc: string
  imageAlt: string
  items: OptimizeItem[]
}

export function MainOptimize({ data }: { data: MainOptimizePropsProps }) {
  const { overline, title, subtitle, imageSrc, imageAlt, items } = data
  return (
    <section className="section-layout grid grid-cols-1 gap-8 lg:grid-cols-2">
      <div className="flex flex-col gap-4">
        <div data-aos="fade-up" className="typography-overline">
          {overline}
        </div>
        <h2 data-aos="fade-up" className="typography-h2">
          {title}
        </h2>
        <p data-aos="fade-up" className="typography-body typography-subtle">
          {subtitle}
        </p>
        <div className="mt-2 flex flex-col gap-3">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-items-start gap-3"
              data-aos="fade-up"
            >
              <Image src={item.iconSrc} alt={item.iconAlt} className="h-4 w-6 object-contain" />
              <p className="typography-body-small typography-emphasis">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center overflow-hidden rounded-lg" data-aos="fade-up">
        <Image src={imageSrc} alt={imageAlt} className="rounded-image h-auto w-full object-cover" />
      </div>
    </section>
  )
}
