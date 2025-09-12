import { Image } from 'app/components/ui/Image'

export type OptimizeItem = {
  id: string
  iconSrc: string
  iconAlt: string
  description: string
}

export type SharedOptimizeProps = {
  overline: string
  title: string
  subtitle: string
  imageSrc: string
  imageAlt: string
  items: OptimizeItem[]
}

export function SharedOptimize({
  overline,
  title,
  subtitle,
  imageSrc,
  imageAlt,
  items,
}: SharedOptimizeProps) {
  return (
    <section className="grid grid-cols-1 gap-8 lg:grid-cols-2">
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
          {items.map((it) => (
            <div key={it.id} className="flex items-start gap-3" data-aos="fade-up">
              <Image src={it.iconSrc} alt={it.iconAlt} className="h-4 w-6 object-contain" />
              <p className="typography-body-small typography-emphasis">{it.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="overflow-hidden rounded-lg border border-neutral-200" data-aos="fade-left">
        <Image src={imageSrc} alt={imageAlt} className="rounded-image h-auto w-full object-cover" />
      </div>
    </section>
  )
}
