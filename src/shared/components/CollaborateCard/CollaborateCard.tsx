import { FC } from 'react'

import styles from './CollaborateCard.module.css'

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
}) => (
  <div
    className={styles['collaborate-card']}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <article>
      <div>
        <header>{header}</header>
        <summary>{summary}</summary>
      </div>
      <footer>{footer}</footer>
    </article>
  </div>
)

export default CollaborateCard
