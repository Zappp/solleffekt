import Link from 'next/link'
import { Image } from './Image'

export interface FooterLink {
  href: string
  label: string
}

export interface FooterLogo {
  src: string
  alt: string
  width: number
  height: number
}

export interface FooterProps {
  logo: FooterLogo
  links: FooterLink[]
  leftInfo: string
  rightInfo: string
}

export function Footer({ logo, links, leftInfo, rightInfo }: FooterProps) {
  return (
    <>
      <div className="pointer-events-none absolute top-0 left-0 w-full border-t border-indigo-200/60" />
      <div className="mx-auto flex max-w-6xl flex-col flex-wrap items-center justify-center gap-4 border-b border-indigo-200/60 px-4 py-10 md:flex-row md:gap-8">
        <div className="flex min-w-[160px] flex-1 items-center justify-center">
          <Image src={logo.src} alt={logo.alt} className="h-30 w-50 object-contain" />
        </div>
        <nav className="flex flex-2 flex-col flex-wrap items-center gap-1 sm:flex-row sm:justify-center md:gap-14">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-1 text-base font-medium transition-colors hover:text-indigo-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-10 text-xs text-indigo-900/70 sm:flex-row sm:text-left">
        <div className="w-full text-center sm:w-auto sm:text-left">{leftInfo}</div>
        <div className="w-full text-center sm:w-auto sm:text-right">{rightInfo}</div>
      </div>
    </>
  )
}
