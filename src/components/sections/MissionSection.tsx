'use client'
import { Image } from 'app/components/ui/Image'

export type MissionSectionProps = {
  date?: string
  title: string
  subtitle: string
  imageSrc: string
  imageAlt: string
}

export function MissionSection({ title, subtitle, imageSrc, imageAlt }: MissionSectionProps) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="typography-h2">{title}</h2>
      <p className="typography-overline uptitle-yellow">{subtitle}</p>
      <div className="rounded-image overflow-hidden border border-neutral-200">
        <Image src={imageSrc} alt={imageAlt} className="h-auto w-full object-cover" sizes="100vw" />
      </div>
    </section>
  )
}
