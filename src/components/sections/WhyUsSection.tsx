'use client'
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
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{heading}</h2>
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
                  <figure className="overflow-hidden rounded-lg border border-neutral-200">
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      className="h-auto w-full object-cover"
                      sizes="(min-width: 1024px) 50vw, 100vw"
                    />
                    {item.imageCaption ? (
                      <figcaption className="border-t border-neutral-200 bg-white px-4 py-3 text-center text-xs text-neutral-600">
                        {item.imageCaption}
                      </figcaption>
                    ) : null}
                  </figure>
                ) : null}
              </div>
              <div className="flex flex-col gap-4">
                {item.points.map((pt) => (
                  <div key={pt.id} className="flex items-start gap-3 rounded-lg bg-neutral-50 p-4">
                    {pt.iconSrc && pt.iconAlt ? (
                      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-white">
                        <Image
                          src={pt.iconSrc}
                          alt={pt.iconAlt}
                          className="h-5 w-5 object-contain"
                        />
                      </div>
                    ) : null}
                    <p className="text-sm text-neutral-700">{pt.description}</p>
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
