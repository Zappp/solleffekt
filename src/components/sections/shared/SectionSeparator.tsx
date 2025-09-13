export function SectionSeparator({
  backgroundImageSrc,
  height = 150,
}: {
  backgroundImageSrc: string
  height?: number
}) {
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
