import { Image } from 'app/components/ui/Image'
import Link from 'next/link'

export type SolarPanelsHeaderSectionProps = {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  primaryCtaLabel?: string
  primaryCtaHref?: string
  secondaryCtaLabel?: string
  secondaryCtaHref?: string
}

export function SolarPanelsHeaderSection({
  title,
  description,
  imageSrc,
  imageAlt,
  primaryCtaLabel,
  primaryCtaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
}: SolarPanelsHeaderSectionProps) {
  return (
    <section className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h1>
        <p className="text-neutral-700">{description}</p>
        <div className="flex flex-wrap items-center gap-3">
          {primaryCtaLabel && primaryCtaHref ? (
            <Link
              href={primaryCtaHref}
              className="inline-flex items-center justify-center rounded-md bg-yellow-400 px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-yellow-500 focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:outline-none"
            >
              {primaryCtaLabel}
            </Link>
          ) : null}
          {secondaryCtaLabel && secondaryCtaHref ? (
            <Link
              href={secondaryCtaHref}
              className="inline-flex items-center justify-center rounded-md border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-indigo-900 transition-colors hover:bg-neutral-50 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none"
            >
              {secondaryCtaLabel}
            </Link>
          ) : null}
        </div>
      </div>

      <div>
        <div className="overflow-hidden rounded-lg border border-neutral-200">
          <Image
            src={imageSrc}
            alt={imageAlt}
            className="h-auto w-full object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>
      </div>
    </section>
  )
}
