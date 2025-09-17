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
                <div
                  key={pt.id}
                  className="flex items-start gap-4 rounded-2xl bg-neutral-50 p-5"
                  data-aos="fade-up"
                >
                  <div className="relative flex h-15 w-15 shrink-0 items-center justify-center rounded-3xl border border-neutral-200 bg-white">
                    <Image
                      src={pt.iconSrc}
                      alt={pt.iconAlt}
                      className="w-full object-contain p-3"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="typography-h6 font-semibold">{pt.title}</div>
                    <div className="typography-body-small typography-subtle">{pt.description}</div>
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
