import { Image } from 'app/components/ui/Image'
import Link from 'next/link'

export type ProductsHeaderProps = {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  primaryCtaLabel?: string
  primaryCtaHref?: string
  secondaryCtaLabel?: string
  secondaryCtaHref?: string
}

export function SolutionsHeader({ data }: { data: ProductsHeaderProps }) {
  const {
    title,
    description,
    imageSrc,
    imageAlt,
    primaryCtaLabel,
    primaryCtaHref,
    secondaryCtaLabel,
    secondaryCtaHref,
  } = data
  return (
    <section className="section-layout grid grid-cols-1 items-center gap-8 md:grid-cols-2">
      <div className="flex flex-col gap-4" data-aos="fade-right">
        <h1 className="typography-h1">{title}</h1>
        <p className="typography-body typography-emphasis">{description}</p>
        <div className="mt-5 flex flex-wrap items-center gap-3">
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

      <div className="rounded-image overflow-hidden" data-aos="fade">
        <Image
          src={imageSrc}
          alt={imageAlt}
          className="max-h-[400px] w-full object-cover object-bottom"
          priority
        />
      </div>
    </section>
  )
}
