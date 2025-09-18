import dynamic from 'next/dynamic'
import { ComponentProps, ComponentType, Suspense, SVGProps } from 'react'

type Icons = 'bar-chart'

interface IconProps extends ComponentProps<'svg'> {
  name: Icons
}

export function importDynamicallySVG(name: string) {
  return dynamic<ComponentProps<'svg'>>(() => import(`app/data/svg/${name}.svg`))
}

const icons: Record<Icons, ComponentType<SVGProps<SVGSVGElement>>> = {
  'bar-chart': importDynamicallySVG('bar-chart'),
}

export const Icon = ({ name, className, ...rest }: IconProps) => {
  const Svg = icons[name]
  if (!Svg) return null

  return (
    <Suspense fallback={<svg className={'h-4 w-4'} aria-hidden {...rest} />}>
      <Svg className={`h-4 w-4 ${className}`} {...rest} />
    </Suspense>
  )
}
