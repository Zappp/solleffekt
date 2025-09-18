'use client'

import { useEffect, useState } from 'react'

interface Cookie {
  id: string
  name: string
  description: string
  checked: boolean
  disabled: boolean
}

export interface CookieConsentProps {
  title: string
  description: string
  acceptButtonText: string
  cookies: Cookie[]
}

export function CookieConsent({ cookieConsent }: { cookieConsent: CookieConsentProps }) {
  const { title, description, acceptButtonText, cookies: initialCookieData } = cookieConsent
  const [isOpen, setIsOpen] = useState(false)
  const [cookies, setCookies] = useState<Cookie[]>(initialCookieData)

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (consent) {
      const parsedConsent = JSON.parse(consent)
      setCookies((prevCookies) =>
        prevCookies.map((cookie) => ({
          ...cookie,
          checked:
            parsedConsent[cookie.id] !== undefined ? parsedConsent[cookie.id] : cookie.checked,
        })),
      )
      setIsOpen(false)
    } else {
      setIsOpen(true)
    }
  }, [])

  const handleAccept = () => {
    const consent = cookies.reduce(
      (acc, cookie) => {
        acc[cookie.id] = cookie.checked
        return acc
      },
      {} as Record<string, boolean>,
    )
    localStorage.setItem('cookieConsent', JSON.stringify(consent))
    setIsOpen(false)
  }

  const handleCookieChange = (id: string) => {
    setCookies((prevCookies) =>
      prevCookies.map((cookie) =>
        cookie.id === id ? { ...cookie, checked: !cookie.checked } : cookie,
      ),
    )
  }

  return (
    <div
      className={`fixed right-0 bottom-0 left-0 z-40 max-h-[calc(100vh-5rem)] transform overflow-y-auto bg-white/85 p-6 pb-15 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.2)] backdrop-blur transition-transform duration-300 ease-out xl:pb-6 ${
        isOpen ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="mx-auto max-w-4xl">
        <h2 className="typography-h2 mb-4">{title}</h2>
        <p className="mb-6 text-base text-neutral-700">{description}</p>

        {cookies.map((cookie) => (
          <div key={cookie.id} className="mb-4">
            <label htmlFor={cookie.id} className="flex items-center justify-between gap-3">
              <div>
                <p className="typography-overline font-semibold">{cookie.name}</p>
                <p className="typography-caption">{cookie.description}</p>
              </div>
              <div className="relative inline-block h-6 w-11 shrink-0">
                <input
                  type="checkbox"
                  id={cookie.id}
                  checked={cookie.checked}
                  disabled={cookie.disabled}
                  onChange={() => handleCookieChange(cookie.id)}
                  className="peer h-0 w-0 opacity-0"
                />
                <span
                  className={`absolute inset-0 rounded-full transition-colors duration-300 before:absolute before:bottom-1 before:left-1 before:h-4 before:w-4 before:rounded-full before:border before:border-neutral-300 before:bg-white before:shadow before:transition-transform before:duration-300 peer-checked:before:translate-x-5 ${
                    cookie.disabled
                      ? 'cursor-not-allowed bg-[var(--yellow-muted)] opacity-50'
                      : 'cursor-pointer bg-neutral-300 peer-checked:bg-[var(--yellow-primary)]'
                  }`}
                ></span>
              </div>
            </label>
          </div>
        ))}

        <div className="flex justify-end">
          <button className="typography-button btn-yellow rounded-md" onClick={handleAccept}>
            {acceptButtonText}
          </button>
        </div>
      </div>
    </div>
  )
}
