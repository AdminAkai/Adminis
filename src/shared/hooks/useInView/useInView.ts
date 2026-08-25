import { RefObject, useEffect, useRef, useState } from 'react'

const useInView = <T extends HTMLElement>(
  options = { threshold: 0.2 }
): [RefObject<T | null>, boolean] => {
  const ref = useRef<T>(null)
  const [isInView, setIsInView] = useState<boolean>(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting)
    }, options)

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return [ref, isInView]
}

export default useInView
