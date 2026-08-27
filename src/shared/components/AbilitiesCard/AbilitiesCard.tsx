import { FC } from 'react'

import styles from './AbilitiesCard.module.css'
import { WindowControlIcon } from '../IconRenderer/icons/WindowControlIcon'
import AbilitiesCardHeader from './AbilitiesCardHeader'
import AbilitiesCardSubheader from './AbilitiesCardSubheader'

export type AbilitiesCardType = {
  cardHeader: string
  summaryHeader: string
  summaryContent: string
  summaryListItems: string[]
}

const AbilitiesCard: FC<AbilitiesCardType> = ({
  cardHeader,
  summaryHeader,
  summaryContent,
  summaryListItems,
}) => {
  return (
    <div className={styles['abilities-card']}>
      <AbilitiesCardHeader title='services#consulting-advisory' />
      <AbilitiesCardSubheader />
      <div className={styles['abilities-summary-container']}>
        <summary className={styles['abilities-summary']}>
          <h1 className={styles['abilities-summary-header']}>
            Consulting & Advisory
          </h1>
          <p className={styles['abilities-summary-content']}>
            Decide what to build before it gets expensive. We pressure-test the
            roadmap and define the outcome worth shipping.
          </p>
          <ul className={styles['abilities-summary-list']}>
            <li className={styles['abilities-summary-list-item']}>
              Product Strategy
            </li>
            {/* <li>Roadmap and Priorities</li>
            <li>Prototypes and MVPs</li>
            <li>Competitive Teardowns</li>
            <li>Architecture and Technical Review</li> */}
          </ul>
        </summary>
      </div>
    </div>
  )
}

export default AbilitiesCard
