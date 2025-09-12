import { Image } from 'app/components/ui/Image'

export type SolutionItem = {
  id: string
  title: string
  description: string
  iconSrc: string
  iconAlt: string
}

export function ProductsSolutions({
  overline,
  heading,
  descriptions,
  ctaLabel,
  ctaHref,
  items,
}: {
  overline: string
  heading: string
  descriptions?: string[]
  ctaLabel: string
  ctaHref: string
  items: SolutionItem[]
}) {
  return (
    <section className="grid grid-cols-1 gap-10 md:grid-cols-2">
      <div className="flex flex-col gap-6">
        <div className="typography-overline" data-aos="fade-up">
          {overline}
        </div>
        <h2 data-aos="fade-up" className="typography-h2">
          {heading}
        </h2>
        {descriptions && descriptions.length > 0 ? (
          <div className="typography-body typography-emphasis flex flex-col gap-4">
            {descriptions.map((para, idx) => (
              <p key={idx} data-aos="fade-up">
                {para}
              </p>
            ))}
          </div>
        ) : null}
        {ctaLabel && (
          <a
            data-aos="fade-up"
            href={ctaHref || '#appointment'}
            className="typography-button btn-yellow inline-flex w-max items-center justify-center"
          >
            {ctaLabel}
          </a>
        )}
      </div>

      <div className="relative md:py-10">
        <div className="flex flex-col gap-8 md:py-10">
          {items.map((item) => (
            <div key={item.id} className="flex items-start gap-4" data-aos="fade-up">
              <div className="relative flex w-14 flex-0 items-center justify-center rounded-full bg-indigo-50 ring-1 ring-indigo-100">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100">
                  <Image src={item.iconSrc} alt={item.iconAlt} className="h-5 w-5 object-contain" />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="typography-h5">{item.title}</div>
                <div className="typography-body-small typography-emphasis">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
