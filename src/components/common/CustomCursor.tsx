import { useEffect, useRef, useState } from 'react'

function canUseCustomCursor() {
  if (typeof window === 'undefined') return false
  const isTouch = window.matchMedia('(pointer: coarse)').matches
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  return !isTouch && !reduceMotion
}

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const [enabled] = useState(canUseCustomCursor)

  useEffect(() => {
    if (!enabled) return

    const move = (e: MouseEvent) => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX - 6}px, ${e.clientY - 6}px, 0)`
      }
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [enabled])

  if (!enabled) return null

  return (
    <div
      ref={dotRef}
      className="pointer-events-none fixed left-0 top-0 z-[100] h-3 w-3 rounded-full border border-primary mix-blend-difference transition-transform duration-75 ease-out hidden lg:block"
      aria-hidden="true"
    />
  )
}
