import { FC, useRef, MouseEvent } from 'react'

import BroadcastIcon from '../IconRenderer/icons/BroadcastIcon'

import styles from './CollaborateCard.module.css'
import { Link, useNavigate } from 'react-router-dom'
import ScrambleText from '../ScrambleText'

export type CollaborateCardProps = {
  onMouseEnter: () => void
  onMouseLeave: () => void
  header: string
  summary: string
  footer: string
}

const CollaborateCard: FC<CollaborateCardProps> = ({
  onMouseEnter,
  onMouseLeave,
  header,
  summary,
  footer,
}) => {
  const ctaRef = useRef<HTMLButtonElement>(null)

  const navigate = useNavigate()

  const redirectToTransmission = () => navigate('/transmission')

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget
    const rect = el.getBoundingClientRect()

    const scaleX = rect.width / el.offsetWidth
    const scaleY = rect.height / el.offsetHeight

    const rawX = (e.clientX - rect.left) / scaleX
    const rawY = (e.clientY - rect.top) / scaleY

    const x = Math.max(0, Math.min(rawX, el.offsetWidth))
    const y = Math.max(0, Math.min(rawY, el.offsetHeight))

    if (ctaRef.current) {
      ctaRef.current.style.left = `${x}px`
      ctaRef.current.style.top = `${y}px`
    }
  }

  return (
    <div
      className={styles['collaborate-card']}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseMove={handleMouseMove}
      onClick={redirectToTransmission}
    >
      <article>
        <div>
          <header>{header}</header>
          <summary>{summary}</summary>
        </div>
        <footer>{footer}</footer>
      </article>
      <button ref={ctaRef} className={styles['collaborate-card-cta']}>
        <ScrambleText text='CONNECT' startOnLoad />
        <BroadcastIcon />
      </button>
    </div>
  )
}

export default CollaborateCard
