export type SectionSeparatorProps = {
  backgroundImageSrc: string
  height?: number
}

export function SectionSeparator({ data }: { data: SectionSeparatorProps }) {
  const { backgroundImageSrc, height = 150 } = data
  return (
    <section
      aria-hidden
      className="mt-1.5 mb-10 w-full self-center bg-cover bg-scroll bg-center md:bg-fixed"
      style={{ backgroundImage: `url(${backgroundImageSrc})`, height: `${height}px` }}
    />
  )
}
