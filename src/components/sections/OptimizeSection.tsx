'use client'
import { Image } from 'app/components/ui/Image'

export type OptimizeItem = {
  id: string
  iconSrc: string
  iconAlt: string
  description: string
}

export type OptimizeSectionProps = {
  uptitle?: string
  title: string
  subtitle: string
  imageSrc: string
  imageAlt: string
  items: OptimizeItem[]
}

export function OptimizeSection({
  uptitle,
  title,
  subtitle,
  imageSrc,
  imageAlt,
  items,
}: OptimizeSectionProps) {
  return (
    <section className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <div className="flex flex-col gap-4">
        {uptitle ? (
          <div className="text-xs font-bold text-indigo-600 uppercase">{uptitle}</div>
        ) : null}
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
        <p className="text-neutral-600">{subtitle}</p>
        <div className="mt-2 flex flex-col gap-3">
          {items.map((it) => (
            <div key={it.id} className="flex items-start gap-3">
              <Image src={it.iconSrc} alt={it.iconAlt} className="h-4 w-6 object-contain" />
              <p className="text-sm text-neutral-700">{it.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="overflow-hidden rounded-lg border border-neutral-200">
        <Image
          src={imageSrc}
          alt={imageAlt}
          className="h-auto w-full object-cover"
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
      </div>
    </section>
  )
}
