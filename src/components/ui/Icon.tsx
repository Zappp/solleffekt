import dynamic from 'next/dynamic'
import { ComponentProps, ComponentType, Suspense, SVGProps } from 'react'

export type IconName =
  | 'bar-chart'
  | 'download'
  | 'eye-open'
  | 'gear'
  | 'home'
  | 'layers'
  | 'lightning-bolt'
  | 'pencil-1'
  | 'person'
  | 'value'

interface IconProps extends ComponentProps<'svg'> {
  name: IconName
}

export function importDynamicallySVG(name: string) {
  return dynamic<ComponentProps<'svg'>>(() => import(`app/data/svg/${name}.svg`))
}

const icons: Record<IconName, ComponentType<SVGProps<SVGSVGElement>>> = {
  'bar-chart': importDynamicallySVG('bar-chart'),
  download: importDynamicallySVG('download'),
  'eye-open': importDynamicallySVG('eye-open'),
  gear: importDynamicallySVG('gear'),
  home: importDynamicallySVG('home'),
  layers: importDynamicallySVG('layers'),
  'lightning-bolt': importDynamicallySVG('lightning-bolt'),
  'pencil-1': importDynamicallySVG('pencil-1'),
  person: importDynamicallySVG('person'),
  value: importDynamicallySVG('value'),
}

export const Icon = ({ name, className, ...rest }: IconProps) => {
  const Svg = icons[name]
  if (!Svg) return null

  return (
    <Suspense fallback={<svg className={`h-4 w-4 ${className}`} aria-hidden {...rest} />}>
      <Svg className={`h-4 w-4 ${className}`} {...rest} />
    </Suspense>
  )
}
