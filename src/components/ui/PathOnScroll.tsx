'use client'

import { animated, useSpring } from '@react-spring/web'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'

const paths = {
  down: {
    path: 'M2 2 V 89.5',
    width: 4,
  },
}

type PathType = keyof typeof paths

interface PathOnScrollProps {
  type: PathType
  className?: string
  offset?: number
}

export const PathOnScroll = ({ type, className = '', offset = 0 }: PathOnScrollProps) => {
  const [stage, setStage] = useState(0)
  const [length, setLength] = useState<number>(0)
  const [containerHeight, setContainerHeight] = useState<number>(130)
  const ref = useRef<HTMLDivElement | null>(null)

  useLayoutEffect(() => {
    if (!ref.current) return
    const parent = ref.current.parentElement
    if (!parent) return
    const updateHeight = () => setContainerHeight(parent.offsetHeight)
    updateHeight()
    const resizeObserver = new window.ResizeObserver(updateHeight)
    resizeObserver.observe(parent)
    return () => resizeObserver.disconnect()
  }, [ref])

  const animatedStyle = useSpring({
    strokeDasharray: length || 1,
    strokeDashoffset: length - stage * (length || 1),
    config: { duration: 10 },
  })

  useEffect(() => {
    let eventTimeout: ReturnType<typeof setTimeout> | undefined
    let eventHandler: (() => void) | undefined

    if (ref.current && length > 0) {
      const scrollOffset = 0.5 * window.innerHeight

      eventHandler = () => {
        if (eventTimeout) window.clearTimeout(eventTimeout)
        eventTimeout = setTimeout(function () {
          if (ref.current) {
            const rect = ref.current.getBoundingClientRect()

            if (rect.top < scrollOffset - length) {
              setStage(1)
              window.removeEventListener('scroll', eventHandler as EventListener)
              if (eventTimeout) clearTimeout(eventTimeout)
            } else if (rect.top < scrollOffset) {
              const st = (scrollOffset - rect.top) / length
              setStage(st)
            }
          }
        }, 1)
      }

      window.addEventListener('scroll', eventHandler, false)
    }
    return () => {
      if (eventHandler) window.removeEventListener('scroll', eventHandler)
      if (eventTimeout) clearTimeout(eventTimeout)
    }
  }, [ref, length])

  const svgWidth = paths[type]?.width || 4
  const pathEnd = Math.max(containerHeight - offset, 2)
  const dynamicPath = `M2 2 V ${pathEnd}`

  return (
    <div ref={ref} className={`pointer-events-none absolute h-full ${className}`}>
      <svg
        width={svgWidth}
        height={containerHeight}
        viewBox={`0 0 ${svgWidth} ${containerHeight}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
      >
        <animated.path stroke="var(--color-neutral-200)" strokeWidth="2" d={dynamicPath} />

        <animated.path
          style={animatedStyle}
          ref={(reference: SVGPathElement | null) => {
            if (reference) {
              const total = reference.getTotalLength()
              setLength(total)
              reference.style.strokeDasharray = `${total}`
              reference.style.strokeDashoffset = `${total}`
            }
          }}
          stroke="var(--btn-yellow-bg)"
          strokeWidth="2"
          d={dynamicPath}
        />
      </svg>
    </div>
  )
}
