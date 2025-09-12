import Link from 'next/link'

interface SolutionsHeaderProps {
  uptitle: string
  title: string
  description: string
  buttonLabel: string
  buttonHref: string
}

export function SolutionsHeader({
  uptitle,
  title,
  description,
  buttonLabel,
  buttonHref,
}: SolutionsHeaderProps) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-16 text-center">
      <div className="typography-overline uptitle-yellow">{uptitle}</div>
      <h1 className="typography-h1 max-w-2xl">{title}</h1>
      <p className="typography-body-large max-w-2xl">{description}</p>
      <Link href={buttonHref} className="typography-button btn-yellow mt-4 inline-block rounded-md">
        {buttonLabel}
      </Link>
    </section>
  )
}
