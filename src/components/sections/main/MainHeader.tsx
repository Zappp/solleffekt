export type MainHeaderProps = {
  tagCompany: string
  tag: string
  title: string
  subtitle: string
}

export function MainHeader({ data }: { data: MainHeaderProps }) {
  const { tagCompany, tag, title, subtitle } = data
  return (
    <section
      className="section-layout flex flex-col items-center gap-2 pt-24 pb-12"
      data-aos="fade"
    >
      <div className="flex items-center gap-2 rounded-full bg-neutral-100 px-4">
        <span className="typography-overline rounded-3xl bg-white px-2 py-0.5 text-xs">
          {tagCompany}
        </span>{' '}
        <p className="py-2 text-xs font-semibold">{tag}</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <h1 className="typography-h1 text-neutral-900">{title}</h1>
        <p className="typography-lead typography-subtle">{subtitle}</p>
      </div>
    </section>
  )
}
