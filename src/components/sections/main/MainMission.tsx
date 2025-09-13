import { Image } from 'app/components/ui/Image'

export type MainMissionProps = {
  date?: string
  title: string
  subtitle: string
  imageSrc: string
  imageAlt: string
}

export function MainMission({ title, subtitle, imageSrc, imageAlt }: MainMissionProps) {
  return (
    <section className="section-layout flex flex-col gap-4">
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
