import Link from 'next/link'
import { Image } from './Image'

export interface FooterLink {
  href: string
  label: string
}

export interface FooterLogo {
  src: string
  alt: string
}

export interface FooterProps {
  logo: FooterLogo
  links: FooterLink[]
  leftInfo: string
  rightInfo: string
}

export function Footer({ data }: { data: FooterProps }) {
  const { logo, links, leftInfo, rightInfo } = data
  return (
    <>
      <div className="pointer-events-none absolute top-0 left-0 w-full border-t border-neutral-200/60" />
      <div className="mx-auto flex max-w-6xl flex-col flex-wrap items-center justify-center gap-4 border-b border-neutral-200/60 px-4 py-7 md:flex-row md:gap-8">
        <nav className="flex flex-2 flex-col flex-wrap items-center justify-center gap-1 sm:flex-row md:gap-14">
          <div className="flex items-center justify-center">
            <Image src={logo.src} alt={logo.alt} className="h-20 w-30 object-contain" />
          </div>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-1 transition-colors hover:text-[var(--btn-yellow-hover)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="typography-emphasis mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-10 text-xs sm:flex-row sm:text-left">
        <div className="w-full text-center sm:w-auto sm:text-left">{leftInfo}</div>
        <div className="w-full text-center sm:w-auto sm:text-right">{rightInfo}</div>
      </div>
    </>
  )
}
