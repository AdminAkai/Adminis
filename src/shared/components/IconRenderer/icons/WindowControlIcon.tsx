import { forwardRef, type SVGProps } from 'react'

export type WindowControlVariant = 'minimize' | 'maximize' | 'close'

export interface WindowControlIconProps extends SVGProps<SVGSVGElement> {
  /** Which glyph to render */
  variant: WindowControlVariant
  /** Width/height in px (or any CSS size unit) — defaults to 24 */
  size?: number | string
  /** Stroke thickness — defaults to 2, matching common icon-set conventions */
  strokeWidth?: number
}

/**
 * Minimize / maximize / close window-control icon, extracted from the
 * original Inkscape artboard (three glyphs on one canvas) into a single
 * reusable, normalized 24x24 icon component.
 *
 * Uses `stroke="currentColor"` so it inherits color from CSS (e.g. a
 * parent `color` or Tailwind `text-*` class) instead of being locked to
 * the original file's hardcoded black.
 *
 * Usage:
 *   <WindowControlIcon variant="close" size={16} />
 *   <WindowControlIcon variant="maximize" className={styles.icon} />
 */
export const WindowControlIcon = forwardRef<
  SVGSVGElement,
  WindowControlIconProps
>(({ variant, size = 24, strokeWidth = 2, ...props }, ref) => {
  const shared = {
    ref,
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth,
    'aria-hidden': props['aria-label'] ? undefined : true,
    ...props,
  } as const

  switch (variant) {
    case 'minimize':
      // Original: horizontal underscore-style line (rect917)
      return (
        <svg {...shared}>
          <line x1='4' y1='21' x2='20' y2='21' strokeLinecap='square' />
        </svg>
      )

    case 'maximize':
      // Original: plain square outline (rect81)
      return (
        <svg {...shared}>
          <rect x='4' y='4' width='16' height='16' />
        </svg>
      )

    case 'close':
      // Original: X made of two diagonal round-capped lines (g926)
      return (
        <svg {...shared}>
          <line x1='5' y1='5' x2='19' y2='19' strokeLinecap='round' />
          <line x1='19' y1='5' x2='5' y2='19' strokeLinecap='round' />
        </svg>
      )
  }
})

WindowControlIcon.displayName = 'WindowControlIcon'

// Convenience named exports if you'd rather import/tree-shake individually
// instead of passing a `variant` prop each time.
export const MinimizeIcon = (
  props: Omit<WindowControlIconProps, 'variant'>
) => <WindowControlIcon variant='minimize' {...props} />
export const MaximizeIcon = (
  props: Omit<WindowControlIconProps, 'variant'>
) => <WindowControlIcon variant='maximize' {...props} />
export const CloseIcon = (props: Omit<WindowControlIconProps, 'variant'>) => (
  <WindowControlIcon variant='close' {...props} />
)
