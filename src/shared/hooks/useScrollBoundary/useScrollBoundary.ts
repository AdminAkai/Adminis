import { useEffect, useState, type RefObject } from 'react'

interface ScrollBoundaryState {
  atTop: boolean
  atBottom: boolean
  /** true only when the element actually has overflow to scroll at all */
  isScrollable: boolean
}

interface UseScrollBoundaryOptions {
  disabled?: boolean
  /**
   * px tolerance for boundary checks — useful if sub-pixel rounding or a
   * fade mask makes "exactly 0" too strict. Defaults to 0.
   */
  threshold?: number
}

/**
 * Tracks whether a scrollable element is at its top/bottom edge, purely as
 * read-only state — no wheel/touch interception, no preventDefault. Safe to
 * use anywhere you want boundary-aware UI (fade masks, "scroll for more"
 * affordances, disabling next/prev buttons, chat-style auto-scroll, etc.)
 * without hijacking the scroll gesture itself.
 *
 * Recomputes on scroll, on mount, and whenever the element or its content
 * resizes (e.g. items loading in asynchronously changing scrollHeight).
 *
 * Usage:
 *   const listRef = useRef<HTMLUListElement>(null);
 *   const { atTop, atBottom, isScrollable } = useScrollBoundary(listRef);
 *   <div className={atBottom ? '' : styles.fadeBottom}>
 *     <ul ref={listRef}>...</ul>
 *   </div>
 */

const useScrollBoundary = (
  elementRef: RefObject<HTMLElement | null>,
  options: UseScrollBoundaryOptions = {}
): ScrollBoundaryState => {
  const { disabled = false, threshold = 0 } = options

  const [state, setState] = useState<ScrollBoundaryState>({
    atTop: true,
    atBottom: false,
    isScrollable: false,
  })

  useEffect(() => {
    const el = elementRef.current
    if (!el || disabled) return

    const measure = () => {
      const { scrollTop, scrollHeight, clientHeight } = el
      const scrollable = scrollHeight > clientHeight

      setState({
        atTop: scrollTop <= threshold,
        atBottom: scrollTop + clientHeight >= scrollHeight - threshold,
        isScrollable: scrollable,
      })
    }

    measure() // establish initial state on mount

    // passive: true — we're only reading state here, never blocking scroll
    el.addEventListener('scroll', measure, { passive: true })

    // Recompute when content size changes (e.g. async-loaded list items)
    // even if the user hasn't scrolled at all.
    const resizeObserver = new ResizeObserver(measure)
    resizeObserver.observe(el)

    return () => {
      el.removeEventListener('scroll', measure)
      resizeObserver.disconnect()
    }
  }, [elementRef, disabled, threshold])

  return state
}

export default useScrollBoundary
