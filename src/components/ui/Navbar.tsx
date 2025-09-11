'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export type NavbarItem = {
  label: string
  href?: string
  children?: Array<{
    label: string
    href: string
    description?: string
  }>
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
              {brand.logoSrc ? (
                <Image src={brand.logoSrc} alt={brand.logoAlt ?? 'Logo'} width={28} height={28} />
              ) : null}
              <span className="text-sm font-semibold">{brand.label}</span>
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
      {items.map((item) =>
        item.children && item.children.length > 0 ? (
          <DesktopDropdown key={item.label} item={item} />
        ) : (
          <NavLink key={item.label} href={item?.href ?? '#'}>
            {item.label}
          </NavLink>
        ),
      )}
    </div>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-foreground/80 hover:text-foreground px-1 transition-colors md:py-4"
    >
      {children}
    </Link>
  )
}

function DesktopDropdown({ item }: { item: NavbarItem }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="text-foreground/80 hover:text-foreground inline-flex items-center gap-1 px-1 py-4 transition-colors"
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
      {open && (
        <div className="absolute left-0">
          <div className="bg-background/95 w-56 rounded-md border border-white/10 shadow-lg backdrop-blur">
            <div className="py-2">
              {item.children?.map((child) => (
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
    <Link href={href} className="block rounded-md px-3 py-2 hover:bg-white/5">
      <div className="text-sm font-medium">{children}</div>
      {description ? <div className="text-foreground/60 text-xs">{description}</div> : null}
    </Link>
  )
}

function MobileMenuButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      aria-label="Toggle menu"
      onClick={onClick}
      className="inline-flex list-none items-center justify-center rounded-md p-2 hover:bg-white/5 md:hidden"
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

function MobileMenu({ open, items }: { open: boolean; items: NavbarItem[] }) {
  return (
    <div
      className={`overflow-hidden border-t border-white/10 transition-all duration-200 ease-out md:hidden ${
        open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}
    >
      <div className="space-y-3 px-4 py-3">
        {items.map((item) => (
          <div key={item.label}>
            {item.children && item.children.length > 0 ? (
              <>
                <div className="text-foreground/60 px-1">{item.label}</div>
                <div className="mt-2 ml-3 flex flex-col gap-3">
                  {item.children.map((child) => (
                    <NavLink key={child.label} href={child.href}>
                      {child.label}
                    </NavLink>
                  ))}
                </div>
              </>
            ) : (
              <NavLink href={item?.href ?? '#'}>{item.label}</NavLink>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
