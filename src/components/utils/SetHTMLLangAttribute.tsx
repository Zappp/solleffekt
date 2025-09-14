'use client'

import { useEffect } from 'react'

export const SetHTMLLangAttribute = ({ locale }: { locale: string }) => {
  useEffect(() => {
    document.documentElement.setAttribute('lang', locale)
  }, [locale])
  return null
}
