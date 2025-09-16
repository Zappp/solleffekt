'use client'

import { defaultLocale } from 'app/app/page'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'

export function LocaleSwitcher({ locales }: { locales: string[] }) {
  const pathname = usePathname()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  if (!pathname) return null

  const currentLocale = locales.includes(pathname.split('/')[1])
    ? pathname.split('/')[1]
    : defaultLocale

  const handleChange = (newLocale: string) => {
    const segments = pathname.split('/').filter(Boolean)
    const currentLocale = locales.includes(segments[0]) ? segments[0] : defaultLocale

    let newPath = ''

    if (newLocale === defaultLocale) {
      newPath = currentLocale === defaultLocale ? pathname : '/' + segments.slice(1).join('/')
    } else {
      newPath =
        currentLocale === defaultLocale
          ? `/${newLocale}${pathname}`
          : `/${newLocale}/${segments.slice(1).join('/')}`
    }

    router.push(newPath || '/')
  }

  return (
    <div className="fixed right-10 bottom-10 z-50">
      <button
        className="flex h-12 w-12 transform items-center justify-center rounded-full bg-red-500 text-white shadow-lg transition-transform duration-300 ease-in-out hover:scale-130 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className={`h-5 w-5 transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>

      {isOpen && (
        <div className="bg-opacity-50 fixed inset-0 z-40" onClick={() => setIsOpen(false)}></div>
      )}

      {isOpen && (
        <div className="absolute right-0 bottom-16 z-50 w-48 rounded-lg bg-white p-4 shadow-[0_0_10px_rgba(0,0,0,0.1)] focus:outline-none">
          <p className="text-md mb-2 font-bold text-gray-900">Select your locale</p>
          <div
            className="flex flex-wrap justify-center gap-4"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {locales.map((loc) => (
              <button
                key={loc}
                onClick={() => {
                  handleChange(loc)
                  setIsOpen(false)
                }}
                className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-sm transition-colors duration-200 ${loc === currentLocale ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                role="menuitem"
              >
                {loc.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
