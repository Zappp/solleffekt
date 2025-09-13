import { Image } from 'app/components/ui/Image'

export type MainHeaderProps = {
  title: string
  subtitle: string
  imageAlt: string
  imageSrc: string
  caption?: string
}

export function MainHeader({ title, subtitle, imageAlt, imageSrc, caption }: MainHeaderProps) {
  return (
    <section className="section-layout flex flex-col gap-6" data-aos="fade">
      <div className="flex flex-col gap-2">
        <h1 className="typography-h1">{title}</h1>
        <p className="typography-lead typography-subtle">{subtitle}</p>
      </div>
      <figure className="rounded-image overflow-hidden border border-neutral-200">
        <Image src={imageSrc} alt={imageAlt} className="h-auto w-full object-cover" priority />
        {caption ? (
          <figcaption className="typography-caption typography-muted border-t border-neutral-200 bg-white px-4 py-3 text-center">
            {caption}
          </figcaption>
        ) : null}
      </figure>
    </section>
  )
}
