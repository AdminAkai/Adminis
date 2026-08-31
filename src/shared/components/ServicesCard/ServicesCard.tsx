import { FC, useMemo } from 'react'

import styles from './ServicesCard.module.css'
import ServicesCardHeader from './ServicesCardHeader'
import ServicesCardSubheader from './ServicesCardSubheader'
import ServicesCardList from './ServicesCardList'
import ServicesCardListItem from './ServicesCardListItem'
import ScrambleText from '../ScrambleText'

import { getLastWord } from 'src/shared/utils/stringUtils'

export type ServicesCardType = {
  cardHeader: string
  summaryHeader: string
  summaryContent: string
  summaryListItems: string[]
  isLast?: boolean
}

const ServicesCard: FC<ServicesCardType> = ({
  cardHeader,
  summaryHeader,
  summaryContent,
  summaryListItems,
  isLast,
}) => {
  const listItems = useMemo(
    () =>
      summaryListItems.map((item) => (
        <ServicesCardListItem key={item}>{item}</ServicesCardListItem>
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
    <article className={styles['services-card']}>
      <ServicesCardHeader title={cardHeader} isLast={isLast} />
      <ServicesCardSubheader />
      <div className={styles['services-summary-container']}>
        <summary className={styles['services-summary']}>
          <h1 className={styles['services-summary-header']}>{renderHeader}</h1>
          <p className={styles['services-summary-content']}>{summaryContent}</p>
          <ServicesCardList>{listItems}</ServicesCardList>
        </summary>
      </div>
    </article>
  )
}

export default ServicesCard
