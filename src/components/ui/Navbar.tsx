'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Fragment, useEffect, useState } from 'react'
import { Image } from './Image'

export type NavbarItem =
  | {
      type: 'link'
      label: string
      href: string
      segments?: Array<{
        title: string
        children: Array<{
          label: string
          href: string
          description?: string
        }>
      }>
    }
  | {
      type: 'button'
      label: string
      action: 'email'
      email?: string
    }

export type NavbarBrand = {
  label: string
  href: string
  logoSrc?: string
  logoAlt?: string
}

export function Navbar({ brand, items }: { brand: NavbarBrand; items: NavbarItem[] }) {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <>
      <nav className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 px-3">
            <Link href={brand.href} className="inline-flex items-center gap-1">
              {brand?.logoSrc ? (
                <Image src={brand.logoSrc} alt={brand?.logoAlt ?? 'Logo'} className="w-10" />
              ) : null}
              <span className="typography-emphasis">{brand.label}</span>
            </Link>
          </div>

          <DesktopNav items={items} />

          <MobileMenuButton onClick={() => setMobileOpen((v) => !v)} />
        </div>
      </nav>

      <MobileMenu open={mobileOpen} items={items} />
    </>
  )
}

function DesktopNav({ items }: { items: NavbarItem[] }) {
  const links = items.filter((item) => item.type !== 'button')
  const buttons = items.filter((item) => item.type === 'button')
  return (
    <div className="hidden flex-1 items-center gap-6 text-sm md:flex md:justify-between">
      <div className="gap-3 md:flex">
        {links.map((link) => {
          return link.segments && link.segments.length > 0 ? (
            <DesktopDropdown key={link.label} item={link} />
          ) : (
            <NavLink key={link.label} href={link.href}>
              {link.label}
            </NavLink>
          )
        })}
      </div>
      <div>
        {buttons.map((item) => {
          if (item.type === 'button') {
            return <EmailButton key={item.label} item={item} />
          }
        })}
      </div>
    </div>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="flex px-1 font-semibold transition-colors hover:text-[var(--btn-yellow-hover)] md:my-4 md:py-0"
    >
      {children}
    </Link>
  )
}

function EmailButton({ item }: { item: Extract<NavbarItem, { type: 'button' }> }) {
  const handleEmailClick = () => {
    const email = item.email || 'contact@solleffekt.com'
    window.location.href = `mailto:${email}`
  }

  return (
    <button onClick={handleEmailClick} className="typography-button btn-yellow rounded-md">
      {item.label}
    </button>
  )
}

function DesktopDropdown({ item }: { item: Extract<NavbarItem, { type: 'link' }> }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="inline-flex items-center gap-1 px-1 py-4 font-semibold"
        aria-haspopup="menu"
        aria-expanded={open}
      >
        {item.label}
        <svg
          width="14"
          height="14"
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`transition-transform ${open ? 'rotate-180' : ''}`}
        >
          <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" />
        </svg>
      </button>
      {open && item.segments && (
        <div className="absolute left-0">
          <div className="rounded-md border border-indigo-200/50 bg-white shadow-lg">
            <div className="flex gap-3 py-2">
              {item.segments.map((segment) => (
                <div className="flex flex-col gap-2 px-3 py-2" key={segment.title}>
                  <h6 className="typography-overline">{segment.title}</h6>
                  {segment.children.map((child) => (
                    <DropdownLink
                      key={child.label}
                      href={child.href}
                      description={child.description}
                    >
                      {child.label}
                    </DropdownLink>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function DropdownLink({
  href,
  children,
  description,
}: {
  href: string
  children: React.ReactNode
  description?: string
}) {
  return (
    <Link
      href={href}
      className="block min-w-44 rounded-md px-3 py-1 hover:bg-yellow-100/60 focus:hover:bg-yellow-100/60"
    >
      <div className="font-semibold">{children}</div>
      {description ? <div className="typography-caption">{description}</div> : null}
    </Link>
  )
}

function MobileMenuButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      aria-label="Toggle menu"
      onClick={onClick}
      className="mx-2 inline-flex list-none items-center justify-center rounded-md p-2 md:hidden"
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="18" x2="21" y2="18" />
      </svg>
    </button>
  )
}

function MobileEmailButton({ item }: { item: Extract<NavbarItem, { type: 'button' }> }) {
  const handleEmailClick = () => {
    const email = item.email || 'contact@solleffekt.com'
    window.location.href = `mailto:${email}`
  }

  return (
    <button
      onClick={handleEmailClick}
      className="typography-button btn-yellow mt-3 w-full rounded-md"
    >
      {item.label}
    </button>
  )
}

function MobileMenu({ open, items }: { open: boolean; items: NavbarItem[] }) {
  return (
    <div
      className={`overflow-hidden border-t border-indigo-200/60 transition-all duration-200 ease-out md:hidden ${
        open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}
    >
      <div className="space-y-3 px-4 py-3">
        {items.map((item) => (
          <div key={item.label}>
            {item.type === 'button' ? (
              <MobileEmailButton item={item} />
            ) : item.segments && item.segments.length > 0 ? (
              <>
                <div className="px-1 font-semibold">{item.label}</div>
                <div className="mt-2 ml-3 flex flex-col gap-1">
                  {item.segments.map((segment) => (
                    <Fragment key={segment.title}>
                      <div className="flex flex-col gap-2 px-3">
                        <h5 className="typography-overline">{segment.title}</h5>
                      </div>
                      <div className="flex flex-col gap-2 px-5">
                        {segment.children.map((child) => (
                          <DropdownLink
                            key={child.label}
                            href={child.href}
                            description={child.description}
                          >
                            {child.label}
                          </DropdownLink>
                        ))}
                      </div>
                    </Fragment>
                  ))}
                </div>
              </>
            ) : (
              <NavLink href={item.href}>{item.label}</NavLink>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
