import { useEffect, useRef } from 'react'

const observer = typeof window !== 'undefined'
  ? new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
          observer.unobserve(e.target)
        }
      }),
      { threshold: 0.1, rootMargin: '0px 0px -32px 0px' }
    )
  : null

export function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (el && observer) observer.observe(el)
    return () => { if (el && observer) observer.unobserve(el) }
  }, [])
  return ref
}
