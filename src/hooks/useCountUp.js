import { useEffect, useState } from 'react'

/**
 * Animates a number from 0 to `end` once `start` is true.
 * `end` should be the numeric value (commas/suffixes are handled by the caller).
 */
export default function useCountUp(end, { start = false, duration = 1400 } = {}) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!start) return

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion) {
      setValue(end)
      return
    }

    let frame
    const startTime = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // ease-out cubic
      setValue(Math.round(eased * end))
      if (progress < 1) {
        frame = requestAnimationFrame(tick)
      }
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [start, end, duration])

  return value
}
