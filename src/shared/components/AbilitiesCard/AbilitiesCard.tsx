import { FC } from 'react'

import styles from './AbilitiesCard.module.css'
import { WindowControlIcon } from '../IconRenderer/icons/WindowControlIcon'

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
      <header className={styles['abilities-header']}>
        <p>services#consulting-advisory</p>
        <div className={styles['abilities-control-section']}>
          <div className={styles['abilities-control']}>
            <WindowControlIcon variant='minimize' size={16} />
          </div>
          <div className={styles['abilities-control']}>
            <WindowControlIcon variant='maximize' size={16} />
          </div>
          <div className={styles['abilities-control']}>
            <WindowControlIcon variant='close' size={16} />
          </div>
        </div>
      </header>
      <header className={styles['abilities-subheader']}>
        <p>
          <span>F</span>ile
        </p>
        <p>
          <span>E</span>dit
        </p>
        <p>
          <span>S</span>earch
        </p>
        <p>
          <span>H</span>elp
        </p>
      </header>
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
