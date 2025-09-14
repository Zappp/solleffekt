import Link from 'next/link'
import '../globals.css'

export default function NotFound() {
  return (
    <section className="section-layout flex min-h-[60vh] flex-col items-center justify-center gap-6 text-center">
      <span className="typography-h1 text-7xl font-bold text-yellow-400 md:text-9xl">404</span>
      <h1 className="typography-h2">Page Not Found</h1>
      <p className="typography-body-large max-w-xl text-neutral-500">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <Link href="/" className="btn-yellow typography-button mt-4 inline-block">
        Go to Homepage
      </Link>
    </section>
  )
}
