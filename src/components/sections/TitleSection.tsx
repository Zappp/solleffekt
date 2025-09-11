'use client'
import { Image } from 'app/components/ui/Image'

export type TitleSectionProps = {
  title: string
  subtitle: string
  imageAlt: string
  imageSrc: string
  caption?: string
}

export function TitleSection({ title, subtitle, imageAlt, imageSrc, caption }: TitleSectionProps) {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h1>
        <p className="text-base text-neutral-600 sm:text-lg">{subtitle}</p>
      </div>
      <figure className="overflow-hidden rounded-lg border border-neutral-200">
        <Image src={imageSrc} alt={imageAlt} className="h-auto w-full object-cover" sizes="100vw" />
        {caption ? (
          <figcaption className="border-t border-neutral-200 bg-white px-4 py-3 text-center text-xs text-neutral-600">
            {caption}
          </figcaption>
        ) : null}
      </figure>
    </section>
  )
}
