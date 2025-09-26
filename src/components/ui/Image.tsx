import NextImage from 'next/image'
import { ComponentPropsWithoutRef, forwardRef } from 'react'

type Props = ComponentPropsWithoutRef<typeof NextImage>

export const Image = forwardRef<HTMLImageElement, Props>(
  ({ src, width = 0, height = 0, ...rest }, forwardedRef) => {
    return <NextImage src={src} ref={forwardedRef} width={width} height={height} {...rest} />
  },
)
Image.displayName = 'Image'
