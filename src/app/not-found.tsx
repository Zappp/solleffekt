import Link from 'next/link'
import './globals.css'

export default function NotFound() {
  return (
    <div className="flex h-screen w-screen flex-col items-center bg-amber-400 px-1 pt-15">
      <section className="section-layout flex flex-col items-center justify-center gap-6 rounded-full bg-white text-center">
        <span className="typography-h1 text-7xl font-bold text-yellow-400 md:text-9xl">404</span>
        <h1 className="typography-h2">Seite nicht gefunden</h1>
        <p className="typography-body-large max-w-xl text-neutral-500">
          Entschuldigung, die von Ihnen gesuchte Seite existiert nicht oder wurde verschoben.
        </p>
        <Link href="/" className="btn-yellow typography-button mt-4 inline-block">
          Zur Startseite
        </Link>
      </section>
    </div>
  )
}
