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
      <h2 className="typography-h2" data-aos="fade-right">
        {title}
      </h2>
      <p className="typography-overline" data-aos="fade-right">
        {subtitle}
      </p>
      <div className="rounded-image overflow-hidden border border-neutral-200" data-aos="fade-up">
        <Image
          src={imageSrc}
          alt={imageAlt}
          data-aos="fade"
          className="h-auto w-full object-cover"
        />
      </div>
    </section>
  )
}
