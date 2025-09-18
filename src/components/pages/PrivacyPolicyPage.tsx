import { Image } from '../ui/Image'

export interface PrivacyPolicyPageData {
  iconAlt: string
  iconSrc: string
  title: string
  href: string
}

export function PrivacyPolicyPage({ data }: { data: PrivacyPolicyPageData }) {
  const { href, iconAlt, iconSrc, title } = data
  return (
    <section className="section-layout flex justify-center">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={href}
        className="flex w-full max-w-[400px] transform flex-col items-center justify-center rounded-3xl border border-neutral-200 bg-white p-8 shadow-md transition-all duration-300 hover:scale-[0.9] hover:shadow-lg"
      >
        <Image priority src={iconSrc} alt={iconAlt} className="mb-4 w-full" />
        <h3 className="typography-h3 text-foreground text-center">{title}</h3>
      </a>
    </section>
  )
}
