import { Image } from 'app/components/ui/Image'
import { PathOnScroll } from 'app/components/ui/PathOnScroll'

export type WhyUsItem = {
  id: string
  imageSrc: string
  imageAlt: string
  imageCaption?: string
  points: Array<{
    id: string
    description: string
    iconSrc: string
    iconAlt: string
    title: string
  }>
}

export type MainWhyUsProps = {
  heading: string
  items: WhyUsItem[]
}

//TODO add 404
//TODO add fill image prop

export function MainWhyUs({ heading, items }: MainWhyUsProps) {
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
              <div className="lg:sticky lg:top-24">
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
              <div className="flex flex-col gap-18">
                {item.points.map((pt, index, arr) => (
                  <div key={pt.id} className="relative flex items-start gap-4 rounded-lg px-4">
                    {pt.iconSrc && pt.iconAlt ? (
                      <div className="relative flex h-15 w-15 flex-shrink-0 items-center rounded-full bg-neutral-50">
                        <Image
                          src={pt.iconSrc}
                          alt={pt.iconAlt}
                          className="flex object-cover p-3"
                          fill
                        />
                      </div>
                    ) : null}
                    {index < arr.length - 1 && (
                      <PathOnScroll type="down" className="top-16 left-11" />
                    )}

                    <div className="flex w-fit flex-col gap-3">
                      <h4 className="typography-h4">{pt.title}</h4>
                      <p className="typography-body-small typography-emphasis">{pt.description}</p>
                    </div>
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
