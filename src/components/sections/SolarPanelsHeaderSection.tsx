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
        <h1 className="typography-h1">{title}</h1>
        <p className="typography-body typography-emphasis">{description}</p>
        <div className="flex flex-wrap items-center gap-3">
          {primaryCtaLabel && primaryCtaHref ? (
            <Link
              href={primaryCtaHref}
              className="typography-button btn-yellow inline-flex items-center justify-center"
            >
              {primaryCtaLabel}
            </Link>
          ) : null}
          {secondaryCtaLabel && secondaryCtaHref ? (
            <Link
              href={secondaryCtaHref}
              className="typography-button btn-white inline-flex items-center justify-center"
            >
              {secondaryCtaLabel}
            </Link>
          ) : null}
        </div>
      </div>

      <div>
        <div className="rounded-image overflow-hidden border border-neutral-200">
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
