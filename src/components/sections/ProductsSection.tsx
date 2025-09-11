'use client'
import { Image } from 'app/components/ui/Image'
import Link from 'next/link'

export type ProductCard = {
  id: string
  title: string
  description: string
  imageSrc: string
  imageAlt: string
}

export type ProductsSectionProps = {
  heading: string
  products: ProductCard[]
}

export function ProductsSection({ heading, products }: ProductsSectionProps) {
  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{heading}</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <article
            key={p.id}
            className="flex flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm"
          >
            {p.imageSrc && p.imageAlt ? (
              <Image
                src={p.imageSrc}
                alt={p.imageAlt}
                className="h-48 w-full object-cover"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
            ) : null}
            <div className="flex flex-1 flex-col gap-3 p-4">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="flex-1 text-sm text-neutral-600">{p.description}</p>
              <div className="mt-1 flex justify-center">
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 rounded-md border border-indigo-200 px-3 py-1.5 text-sm font-medium text-indigo-700 shadow-sm hover:bg-indigo-50"
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
