'use client'

import { animated, useSpring } from '@react-spring/web'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'

const paths = {
  downShort: {
    path: 'M2 2 V 89.5',
    width: 4,
  },
}

type PathType = keyof typeof paths

interface PathOnScrollProps {
  type: PathType
  className?: string
  offset?: number // new prop
}

export const PathOnScroll = ({ type, className = '', offset = 0 }: PathOnScrollProps) => {
  const [stage, setStage] = useState(0)
  const [length, setLength] = useState<number>(0)
  const [containerHeight, setContainerHeight] = useState<number>(0)
  const ref = useRef<HTMLDivElement | null>(null)

  useLayoutEffect(() => {
    if (ref.current) {
      setContainerHeight(ref.current.offsetHeight)
    }
  }, [ref])

  const animatedStyle = useSpring({
    strokeDasharray: length || 200,
    strokeDashoffset: -stage * (length || 1),
    config: { duration: 10 },
  })

  useEffect(() => {
    let eventTimeout: ReturnType<typeof setTimeout> | undefined
    let eventHandler: (() => void) | undefined

    if (ref.current && length && length >= 0) {
      const offset = 0.8 * window.innerHeight

      eventHandler = () => {
        if (eventTimeout) window.clearTimeout(eventTimeout)
        eventTimeout = setTimeout(function () {
          if (ref.current) {
            const rect = ref.current.getBoundingClientRect()

            if (rect.top < offset - length) {
              setStage(1)
              window.removeEventListener('scroll', eventHandler as EventListener)
              if (eventTimeout) clearTimeout(eventTimeout)
            } else if (rect.top < offset) {
              const st = (offset - rect.top) / length
              setStage(st)
            }
          }
        }, 1)
      }

      if (typeof window !== 'undefined' && eventHandler) {
        window.addEventListener('scroll', eventHandler, false)
      }
    }
    return () => {
      if (eventHandler) window.removeEventListener('scroll', eventHandler)
      if (eventTimeout) clearTimeout(eventTimeout)
    }
  }, [ref, length])

  const svgHeight = containerHeight || 0
  const svgWidth = paths[type]?.width || 4
  const pathEnd = Math.max(svgHeight - offset - 2, 2)
  const dynamicPath = `M2 2 V ${pathEnd}`

  return (
    <div ref={ref} className={`pointer-events-none absolute h-full ${className}`}>
      <svg
        width={svgWidth}
        height={svgHeight}
        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
      >
        <animated.path stroke="var(--btn-yellow-bg)" strokeWidth="2" d={dynamicPath} />
        <animated.path
          style={animatedStyle}
          ref={(reference: SVGPathElement | null) => {
            if (reference) setLength(reference.getTotalLength())
          }}
          stroke="var(--color-neutral-100)"
          strokeWidth="2"
          d={dynamicPath}
        />
      </svg>
    </div>
  )
}
