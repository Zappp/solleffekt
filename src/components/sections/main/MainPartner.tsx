import { Image } from 'app/components/ui/Image'

export type PartnerPoint = {
  id: string
  title: string
  description: string
  iconSrc: string
  iconAlt: string
}

export type PartnerItem = {
  id: string
  points: PartnerPoint[]
  imageSrc: string
  imageAlt: string
}

export type MainPartnerProps = {
  id: string
  title: string
  overline: string
  items: PartnerItem[]
}

export function MainPartner({ data }: { data: MainPartnerProps }) {
  const { items, overline, title, id } = data
  return (
    <section className="section-layout flex flex-col gap-12" id={id}>
      <div className="flex flex-col gap-4">
        <div data-aos="fade-up" className="typography-overline">
          {overline}
        </div>
        <h2 data-aos="fade-up" className="typography-h2">
          {title}
        </h2>
      </div>
      {items.map((block, index) => {
        const reversed = index % 2 === 1
        const swapOrder = reversed
          ? 'md:[&>div:first-child]:order-2 md:[&>div:last-child]:order-1'
          : ''
        return (
          <div
            key={block.id}
            className={`grid grid-cols-1 items-start gap-8 md:grid-cols-[1fr_1fr] ${swapOrder}`}
          >
            <div className="relative">
              <div className="mx-auto w-full max-w-md md:max-w-none" data-aos="fade-up">
                <Image
                  src={block.imageSrc}
                  alt={block.imageAlt}
                  className="rounded-image h-auto w-full object-contain"
                />
              </div>
            </div>

            <div className="flex flex-col gap-8">
              {block.points.map((pt) => (
                <div key={pt.id} className="flex items-start gap-4" data-aos="fade-up">
                  <div className="relative flex w-12 flex-0 items-center justify-center rounded-full bg-indigo-50 ring-1 ring-indigo-100">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100">
                      <Image src={pt.iconSrc} alt={pt.iconAlt} className="h-5 w-5 object-contain" />
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
        )
      })}
    </section>
  )
}
