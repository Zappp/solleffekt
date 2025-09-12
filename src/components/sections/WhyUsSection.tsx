import { Image } from 'app/components/ui/Image'

export type WhyUsItem = {
  id: string
  imageSrc: string
  imageAlt: string
  imageCaption?: string
  points: Array<{ id: string; description: string; iconSrc: string; iconAlt: string }>
}

export type WhyUsSectionProps = {
  heading: string
  items: WhyUsItem[]
}

export function WhyUsSection({ heading, items }: WhyUsSectionProps) {
  return (
    <section className="flex flex-col gap-6">
      <h2 data-aos="fade-up" className="typography-h2">
        {heading}
      </h2>
      <div className="flex flex-col gap-10">
        {items.map((item, index) => {
          const isReversed = index % 2 === 1
          return (
            <div
              key={item.id}
              className={`grid grid-cols-1 items-start gap-6 sm:gap-8 lg:grid-cols-2 ${isReversed ? 'lg:[&>div:first-child]:order-2' : ''}`}
            >
              <div>
                {item.imageSrc && item.imageAlt ? (
                  <figure
                    className="rounded-image overflow-hidden border border-neutral-200"
                    data-aos="fade-up"
                  >
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      className="h-auto w-full object-cover"
                    />
                    {item.imageCaption ? (
                      <figcaption className="typography-caption typography-muted border-t border-neutral-200 bg-white px-4 py-3 text-center">
                        {item.imageCaption}
                      </figcaption>
                    ) : null}
                  </figure>
                ) : null}
              </div>
              <div className="flex flex-col gap-4">
                {item.points.map((pt) => (
                  <div
                    key={pt.id}
                    className="flex items-start gap-3 rounded-lg bg-neutral-50 p-4"
                    data-aos={isReversed ? 'fade-right' : 'fade-left'}
                  >
                    {pt.iconSrc && pt.iconAlt ? (
                      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-white">
                        <Image
                          src={pt.iconSrc}
                          alt={pt.iconAlt}
                          className="h-5 w-5 object-contain"
                        />
                      </div>
                    ) : null}
                    <p className="typography-body-small typography-emphasis">{pt.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
