import { FC, useMemo } from 'react'

import styles from './AbilitiesCard.module.css'
import AbilitiesCardHeader from './AbilitiesCardHeader'
import AbilitiesCardSubheader from './AbilitiesCardSubheader'
import AbilitiesCardList from './AbilitiesCardList'
import AbilitiesCardListItem from './AbilitiesCardListItem'

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
  const listItems = useMemo(
    () =>
      summaryListItems.map((item) => (
        <AbilitiesCardListItem key={item}>{item}</AbilitiesCardListItem>
      )),
    [summaryListItems]
  )

  return (
    <div className={styles['abilities-card']}>
      <AbilitiesCardHeader title={cardHeader} />
      <AbilitiesCardSubheader />
      <div className={styles['abilities-summary-container']}>
        <summary className={styles['abilities-summary']}>
          <h1 className={styles['abilities-summary-header']}>
            {summaryHeader}
          </h1>
          <p className={styles['abilities-summary-content']}>
            {summaryContent}
          </p>
          <AbilitiesCardList>{listItems}</AbilitiesCardList>
        </summary>
      </div>
    </div>
  )
}

export default AbilitiesCard
