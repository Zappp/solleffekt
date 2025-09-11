'use client'
import { Image } from 'app/components/ui/Image'

export type MissionSectionProps = {
  date?: string
  title: string
  subtitle: string
  imageSrc: string
  imageAlt: string
  accentColorClassName: string
}

export function MissionSection({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  accentColorClassName,
}: MissionSectionProps) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
      <p className={`text-sm font-bold uppercase ${accentColorClassName}`}>{subtitle}</p>
      <div className="overflow-hidden rounded-lg border border-neutral-200">
        <Image src={imageSrc} alt={imageAlt} className="h-auto w-full object-cover" sizes="100vw" />
      </div>
    </section>
  )
}
