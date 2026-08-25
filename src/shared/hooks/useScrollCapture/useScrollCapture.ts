import { useEffect, useRef, type RefObject } from 'react'

interface UseScrollCaptureOptions {
  /**
   * Optional: only capture once this element has scrolled to/near the
   * top of the viewport — prevents the takeover from firing while the
   * section is still off-screen or mid-transition into view.
   */
  activationThreshold?: number // 0–1, fraction of element visible required
  /** Disable capture entirely (e.g. on mobile where wheel deltas differ) */
  disabled?: boolean
}

/**
 * Captures wheel/touch scroll on `innerRef` while it has room to scroll
 * internally, releasing control back to the page once the inner list
 * hits its own top/bottom edge in the direction the user is scrolling.
 *
 * Usage:
 *   const listRef = useRef<HTMLDivElement>(null);
 *   useScrollCapture(listRef);
 *   <div ref={listRef} style={{ overflowY: "auto" }}>...service cards...</div>
 */
const useScrollCapture = (
  innerRef: RefObject<HTMLUListElement | null>,
  options: UseScrollCaptureOptions = {}
) => {
  const { disabled = false } = options

  // Tracks whether the inner list is currently "owning" the scroll,
  // so we don't re-derive boundary state on every single event.
  const isCapturing = useRef(false)
  const touchStartY = useRef(0)

  useEffect(() => {
    if (!innerRef?.current) return
    console.log('hit')
    const el = innerRef.current
    if (!el || disabled) return

    const atTop = () => el.scrollTop <= 0
    const atBottom = () =>
      Math.ceil(el.scrollTop + el.clientHeight) >= el.scrollHeight

    const handleWheel = (e: WheelEvent) => {
      const scrollingDown = e.deltaY > 0
      const scrollingUp = e.deltaY < 0

      console.log('wheel on inner', {
        scrollTop: el.scrollTop,
        atTop: atTop(),
        atBottom: atBottom(),
      })
      const shouldReleaseToPage =
        (scrollingDown && atBottom()) || (scrollingUp && atTop())

      if (shouldReleaseToPage) {
        // Let the native page scroll happen; don't fight it.
        isCapturing.current = false
        return
      }

      // Inner list still has room — consume the event here.
      isCapturing.current = true
      e.preventDefault()
      el.scrollTop += e.deltaY
    }

    // Touch needs a manual delta since there's no deltaY equivalent.
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY
    }

    const handleTouchMove = (e: TouchEvent) => {
      const currentY = e.touches[0].clientY
      const deltaY = touchStartY.current - currentY // positive = scrolling down
      touchStartY.current = currentY

      const scrollingDown = deltaY > 0
      const scrollingUp = deltaY < 0

      const shouldReleaseToPage =
        (scrollingDown && atBottom()) || (scrollingUp && atTop())

      if (shouldReleaseToPage) {
        isCapturing.current = false
        return
      }

      isCapturing.current = true
      e.preventDefault()
      el.scrollTop += deltaY
    }

    // { passive: false } is required so preventDefault() actually works —
    // Safari/Chrome default touch/wheel listeners to passive for perf.
    el.addEventListener('wheel', handleWheel, { passive: false })
    el.addEventListener('touchstart', handleTouchStart, { passive: true })
    el.addEventListener('touchmove', handleTouchMove, { passive: false })

    return () => {
      el.removeEventListener('wheel', handleWheel)
      el.removeEventListener('touchstart', handleTouchStart)
      el.removeEventListener('touchmove', handleTouchMove)
    }
  }, [innerRef, disabled])

  return isCapturing
}

export default useScrollCapture
