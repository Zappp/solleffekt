'use client'

import 'aos/dist/aos.css'
import { useEffect } from 'react'

export const AOS = () => {
  useEffect(() => {
    import('aos').then((AOS) =>
      AOS.init({
        duration: 800,
        once: true,
        offset: 300,
      }),
    )
  }, [])
  return null
}
