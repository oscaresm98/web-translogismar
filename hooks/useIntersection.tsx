import { useEffect, useRef, useState } from "react"

export default function useIntersection(opciones: {}) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isIntersecting, setisIntersecting] = useState(false)
  useEffect(() => {
    const element = elementRef.current
    const myObserver = new IntersectionObserver(entries => {
      entries.forEach(entrie => {
        if (entrie.isIntersecting)
          setisIntersecting(true);
      })
    }, opciones)
    if (element) {
      myObserver.observe(element)
    }

    return () => {
      if (element) {
        myObserver.unobserve(element)
      }
    }
  }, [opciones])

  return [elementRef, isIntersecting] as const

}
