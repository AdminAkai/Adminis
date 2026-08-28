import { FC, useMemo } from 'react'

import styles from './AbilitiesCard.module.css'
import AbilitiesCardHeader from './AbilitiesCardHeader'
import AbilitiesCardSubheader from './AbilitiesCardSubheader'
import AbilitiesCardList from './AbilitiesCardList'
import AbilitiesCardListItem from './AbilitiesCardListItem'
import { getLastWord } from 'src/shared/utils/stringUtils'
import ScrambleText from '../ScrambleText'

export type AbilitiesCardType = {
  cardHeader: string
  summaryHeader: string
  summaryContent: string
  summaryListItems: string[]
  isLast?: boolean
}

const AbilitiesCard: FC<AbilitiesCardType> = ({
  cardHeader,
  summaryHeader,
  summaryContent,
  summaryListItems,
  isLast,
}) => {
  const listItems = useMemo(
    () =>
      summaryListItems.map((item) => (
        <AbilitiesCardListItem key={item}>{item}</AbilitiesCardListItem>
      )),
    [summaryListItems]
  )

  const renderHeader = useMemo(() => {
    if (!isLast) return summaryHeader
    const [lastWord, summaryHeaderSentence] = getLastWord(summaryHeader)
    return (
      <span>
        {summaryHeaderSentence}&nbsp;
        <ScrambleText text={lastWord} infinite />
      </span>
    )
  }, [isLast, summaryHeader])

  return (
    <article className={styles['abilities-card']}>
      <AbilitiesCardHeader title={cardHeader} isLast={isLast} />
      <AbilitiesCardSubheader />
      <div className={styles['abilities-summary-container']}>
        <summary className={styles['abilities-summary']}>
          <h1 className={styles['abilities-summary-header']}>{renderHeader}</h1>
          <p className={styles['abilities-summary-content']}>
            {summaryContent}
          </p>
          <AbilitiesCardList>{listItems}</AbilitiesCardList>
        </summary>
      </div>
    </article>
  )
}

export default AbilitiesCard
