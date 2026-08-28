import { CSSProperties, FC, useMemo } from 'react'

import PageMark from 'src/shared/components/PageMark/PageMark'
import Section from 'src/shared/components/Section/Section'
import ScrambleText from 'src/shared/components/ScrambleText'
import AbilitiesCard from 'src/shared/components/AbilitiesCard'
import AbilitiesCardSection from 'src/shared/components/AbilitiesCardSection'

import useInView from 'src/shared/hooks/useInView'
import useMediaQuery from 'src/shared/hooks/useMediaQuery'

import { Language } from 'src/shared/redux/settingsSlice/settingsInitial'
import { useAppSelector } from 'src/shared/redux/store'
import { selectLanguage } from 'src/shared/redux/settingsSlice/settingsSelectors'

import { AbilitiesCards } from './lib'

import styles from './EpisodeTwo.module.css'

const EpisodeTwo: FC = () => {
  const lang: Language = useAppSelector(selectLanguage)

  const isMobile = useMediaQuery('(max-width: 959px)')
  const [ref, isInView] = useInView<HTMLDivElement>()

  const AbilitiesCardsList = useMemo(
    () =>
      AbilitiesCards.map((card, i) => (
        <AbilitiesCard
          key={card.cardHeader}
          {...card}
          isLast={i === AbilitiesCards.length - 1}
        />
      )),
    []
  )

  const titleSectionStyles = useMemo<CSSProperties>(() => {
    if (isMobile)
      return {
        position: 'initial',
      }
    return {
      position: isInView ? 'fixed' : 'initial',
      top: isInView ? '50%' : '',
      left: isInView ? '25%' : '',
      opacity: isInView ? '100%' : '0',
      transform: isInView ? 'translate(-50%, -50%)' : 'none',
    }
  }, [isMobile, isInView])

  return (
    <Section style={{ height: 'auto', minHeight: 'auto' }}>
      <div ref={ref} className={styles['ep-two']}>
        <div className={styles['ep-two-sector']} style={titleSectionStyles}>
          <h1 className={styles['ep-two-title']}>
            [<ScrambleText text='Abilities' startOnLoad={isInView} />
            &nbsp; /&nbsp;Services]
          </h1>
          <div className={styles['ep-two-subtitle']}>
            WHAT I CAN DO FOR&nbsp;
            <div>
              <ScrambleText text='YOU' startOnLoad />
              &#46;
            </div>
          </div>
          <div className={styles['ep-two-tag']}>
            <ScrambleText
              text='One obsessor. Many obsessions.'
              startOnLoad
              lang={lang}
            />
          </div>
        </div>
        <AbilitiesCardSection>{AbilitiesCardsList}</AbilitiesCardSection>
      </div>
      <PageMark>SERVICES / EP-02</PageMark>
    </Section>
  )
}

export default EpisodeTwo
