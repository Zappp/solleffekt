export type SectionSeparatorProps = {
  backgroundImageSrc: string
  height?: number
}

export function SectionSeparator({ data }: { data: SectionSeparatorProps }) {
  const { backgroundImageSrc, height = 150 } = data
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
  const url = `${basePath}${backgroundImageSrc}`
  return (
    <div
      aria-hidden
      className="w-full self-center bg-cover bg-scroll bg-center md:bg-fixed"
      style={{ backgroundImage: `url(${url})`, height: `${height}px` }}
    />
  )
}
