import { Image } from 'app/components/ui/Image'
import Link from 'next/link'

export type ProductCard = {
  id: string
  title: string
  description: string
  imageSrc: string
  imageAlt: string
}

export type MainProductsProps = {
  heading: string
  products: ProductCard[]
}

export function MainProducts({ heading, products }: MainProductsProps) {
  return (
    <section className="section-layout flex flex-col gap-6">
      <h2 className="typography-h2" data-aos="fade-up">
        {heading}
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <article
            key={p.id}
            className="flex flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm"
            data-aos="fade-up"
          >
            {p.imageSrc && p.imageAlt ? (
              <Image
                src={p.imageSrc}
                alt={p.imageAlt}
                className="rounded-image h-48 w-full object-cover"
              />
            ) : null}
            <div className="flex flex-1 flex-col gap-3 p-4">
              <h3 className="typography-h5">{p.title}</h3>
              <p className="typography-body-small typography-subtle flex-1">{p.description}</p>
              <div className="mt-1 flex justify-center">
                <Link
                  href="#"
                  className="typography-button btn-yellow inline-flex items-center gap-2 rounded-md"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
