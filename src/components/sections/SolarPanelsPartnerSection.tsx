import { Image } from 'app/components/ui/Image'

export type PartnerPoint = {
  id: string
  title: string
  description: string
  iconSrc: string
  iconAlt: string
}

export type PartnerBlock = {
  id: string
  overline: string
  points: PartnerPoint[]
  imageSrc: string
  imageAlt: string
}

export function SolarPanelsPartnerSection({ items }: { items: PartnerBlock[] }) {
  return (
    <section className="flex flex-col gap-12">
      {items.map((block, index) => {
        const reversed = index % 2 === 1
        const gridCols = reversed ? 'md:grid-cols-[1fr_1fr]' : 'items-center md:grid-cols-[2fr_1fr]'
        const swapOrder = reversed
          ? 'md:[&>div:first-child]:order-2 md:[&>div:last-child]:order-1'
          : ''
        return (
          <div key={block.id} className={`grid grid-cols-1 gap-8 ${gridCols} ${swapOrder}`}>
            <div className="flex flex-col gap-6">
              <div className="typography-overline" data-aos={reversed ? 'fade-left' : 'fade-right'}>
                {block.overline}
              </div>
              <div className="flex flex-col gap-8">
                {block.points.map((pt) => (
                  <div
                    key={pt.id}
                    className="flex items-start gap-4"
                    data-aos={reversed ? 'fade-left' : 'fade-right'}
                  >
                    <div className="relative flex w-12 flex-0 items-center justify-center rounded-full bg-indigo-50 ring-1 ring-indigo-100">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100">
                        <Image
                          src={pt.iconSrc}
                          alt={pt.iconAlt}
                          className="h-5 w-5 object-contain"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="typography-h5">{pt.title}</div>
                      <div className="typography-body-small typography-emphasis">
                        {pt.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div
                className="mx-auto w-full max-w-md md:max-w-none"
                data-aos={reversed ? 'fade-right' : 'fade-left'}
              >
                <Image
                  src={block.imageSrc}
                  alt={block.imageAlt}
                  className="rounded-image h-auto w-full object-contain"
                />
              </div>
            </div>
          </div>
        )
      })}
    </section>
  )
}
