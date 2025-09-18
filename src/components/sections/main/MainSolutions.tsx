import { Image } from 'app/components/ui/Image'
import Link from 'next/link'

export type ProductCard = {
  id: string
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  buttonHref: string
}

export type MainProductsProps = {
  heading: string
  buttonLabel: string
  items: ProductCard[]
}

export function MainSolutions({ data }: { data: MainProductsProps }) {
  const { heading, items, buttonLabel } = data
  return (
    <section className="section-layout flex flex-col gap-6">
      <h2 className="typography-h2" data-aos="fade-up">
        {heading}
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => (
          <article key={p.id} data-aos="fade-up">
            <div className="flex h-full flex-col justify-center overflow-hidden rounded-xl border border-neutral-100 px-3 py-3 shadow-md transition-transform duration-300 hover:scale-95 md:py-20">
              {p.imageSrc && p.imageAlt ? (
                <Image
                  src={p.imageSrc}
                  alt={p.imageAlt}
                  className="rounded-image h-48 w-full object-cover object-bottom"
                />
              ) : null}
              <div className="flex flex-1 flex-col items-center gap-3 p-4 text-center">
                <h3 className="typography-h3">{p.title}</h3>
                <p className="typography-body-small typography-subtle flex-1">{p.description}</p>
                <div className="mt-1 flex justify-center">
                  <Link
                    href={p.buttonHref}
                    className="typography-button btn-yellow inline-flex items-center gap-2 rounded-md"
                  >
                    {buttonLabel}
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
