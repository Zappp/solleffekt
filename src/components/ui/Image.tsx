import NextImage from 'next/image'
import { ComponentPropsWithoutRef, forwardRef } from 'react'

type Props = ComponentPropsWithoutRef<typeof NextImage>

export const Image = forwardRef<HTMLImageElement, Props>(({ src, ...rest }, forwardedRef) => {
  return (
    <NextImage src={(process.env.NEXT_PUBLIC_BASE_PATH ?? '') + src} ref={forwardedRef} {...rest} />
  )
})
Image.displayName = 'Image'
