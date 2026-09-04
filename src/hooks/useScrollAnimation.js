import { useEffect, useRef, useState } from 'react'

/**
 * Reveals an element the first time it scrolls into view.
 * Returns a ref to attach to the element and a boolean for whether it's visible.
 * Respects prefers-reduced-motion by revealing immediately.
 */
export default function useScrollAnimation({ threshold = 0.2, rootMargin = '0px 0px -60px 0px' } = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion) {
      setIsVisible(true)
      return
    }

    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(node)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return [ref, isVisible]
}
