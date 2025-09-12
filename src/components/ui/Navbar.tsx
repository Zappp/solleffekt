'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Image } from './Image'

export type NavbarItem =
  | {
      type: 'link'
      label: string
      href: string
      children?: Array<{
        label: string
        href: string
        description?: string
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
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <nav className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 py-3">
            <Link href={brand.href} className="inline-flex items-center gap-2">
              {brand?.logoSrc ? (
                <Image src={brand.logoSrc} alt={brand?.logoAlt ?? 'Logo'} className="w-10" />
              ) : null}
              <span className="typography-button typography-emphasis">{brand.label}</span>
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
  return (
    <div className="hidden items-center gap-6 text-sm md:flex">
      {items.map((item) => {
        if (item.type === 'button') {
          return <EmailButton key={item.label} item={item} />
        }

        return item.children && item.children.length > 0 ? (
          <DesktopDropdown key={item.label} item={item} />
        ) : (
          <NavLink key={item.label} href={item.href}>
            {item.label}
          </NavLink>
        )
      })}
    </div>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="px-1 text-indigo-800 transition-colors hover:text-indigo-900 md:my-4 md:py-0"
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
        className="inline-flex items-center gap-1 px-1 py-4 text-indigo-800 transition-colors hover:text-indigo-900"
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
      {open && item.children && (
        <div className="absolute left-0">
          <div className="w-56 rounded-md border border-indigo-200/50 bg-white shadow-lg">
            <div className="py-2">
              {item.children.map((child) => (
                <DropdownLink key={child.label} href={child.href} description={child.description}>
                  {child.label}
                </DropdownLink>
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
    <Link href={href} className="block rounded-md px-3 py-2 hover:bg-indigo-100/60">
      <div className="typography-body-small typography-emphasis text-indigo-900">{children}</div>
      {description ? (
        <div className="typography-caption text-indigo-700/70">{description}</div>
      ) : null}
    </Link>
  )
}

function MobileMenuButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      aria-label="Toggle menu"
      onClick={onClick}
      className="inline-flex list-none items-center justify-center rounded-md p-2 text-indigo-800 hover:bg-indigo-100/60 md:hidden"
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
    <button onClick={handleEmailClick} className="typography-button btn-yellow w-full rounded-md">
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
            ) : item.children && item.children.length > 0 ? (
              <>
                <div className="typography-body-small px-1 text-indigo-700/80 dark:text-indigo-200/80">
                  {item.label}
                </div>
                <div className="mt-2 ml-3 flex flex-col gap-3">
                  {item.children.map((child) => (
                    <NavLink key={child.label} href={child.href}>
                      {child.label}
                    </NavLink>
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
