import { Image } from 'app/components/ui/Image'

export type SolutionItem = {
  id: string
  title: string
  description: string
  iconSrc: string
  iconAlt: string
}

export function SolarPanelsSolutionsSection({
  uptitle,
  heading,
  descriptions,
  ctaLabel,
  ctaHref,
  items,
}: {
  uptitle?: string
  heading: string
  descriptions?: string[]
  ctaLabel?: string
  ctaHref?: string
  items: SolutionItem[]
}) {
  return (
    <section className="grid grid-cols-1 gap-10 md:grid-cols-2">
      <div className="flex flex-col gap-6">
        {uptitle ? (
          <div className="text-xs font-bold text-indigo-600 uppercase">{uptitle}</div>
        ) : null}
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{heading}</h2>
        {descriptions && descriptions.length > 0 ? (
          <div className="flex flex-col gap-4 text-neutral-700">
            {descriptions.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        ) : null}
        {ctaLabel && (
          <a
            href={ctaHref || '#appointment'}
            className="inline-flex w-max items-center justify-center rounded-md bg-yellow-400 px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-yellow-500 focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:outline-none"
          >
            {ctaLabel}
          </a>
        )}
      </div>

      <div className="relative md:py-10">
        <div className="flex flex-col gap-8 md:py-10">
          {items.map((item) => (
            <div key={item.id} className="flex items-start gap-4">
              <div className="relative flex w-14 flex-0 items-center justify-center rounded-full bg-indigo-50 ring-1 ring-indigo-100">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100">
                  <Image src={item.iconSrc} alt={item.iconAlt} className="h-5 w-5 object-contain" />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-lg font-semibold text-indigo-900">{item.title}</div>
                <div className="text-sm text-neutral-700">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
