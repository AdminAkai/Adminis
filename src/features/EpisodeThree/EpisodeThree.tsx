import { FC, useMemo, useState } from 'react'

import PageMark from 'src/shared/components/PageMark/PageMark'
import ScrambleText from 'src/shared/components/ScrambleText'
import Section from 'src/shared/components/Section/Section'

import { Language } from 'src/shared/redux/settingsSlice/settingsInitial'
import { useAppSelector } from 'src/shared/redux/store'
import { selectLanguage } from 'src/shared/redux/settingsSlice/settingsSelectors'

import styles from './EpisodeThree.module.css'
import useInView from 'src/shared/hooks/useInView'
import CollaborateCard from 'src/shared/components/CollaborateCard'
import { collaborateCards } from './lib'

const EpisodeOne: FC = () => {
  const [ref, isInView] = useInView<HTMLDivElement>()

  const lang: Language = useAppSelector(selectLanguage)

  const [connectionName, setConnectionName] = useState<string>('HANDSHAKE')

  const renderCollaborateCards = useMemo(
    () =>
      collaborateCards.map((card) => (
        <CollaborateCard
          onMouseEnter={() => setConnectionName(card.header)}
          onMouseLeave={() => setConnectionName('HANDSHAKE')}
          {...card}
        />
      )),
    [collaborateCards]
  )

  return (
    <Section>
      <div className={styles['ep-three']}>
        <div ref={ref} className={styles['ep-three-sector']}>
          <h1 className={styles['ep-three-title']}>
            [<ScrambleText text='Integration' startOnLoad={isInView} />
            &nbsp;/&nbsp;Collaborate]
          </h1>
          <div className={styles['ep-three-subtitle']}>
            CONNECTION&nbsp;
            <div>
              <ScrambleText text={connectionName} startOnLoad />
              &#46;
            </div>
          </div>
          <div className={styles['ep-three-tag']}>
            <ScrambleText
              text='Any protocols, all written negotiations.'
              startOnLoad
              lang={lang}
            />
          </div>
        </div>
        <div className={styles['ep-three-sector']}>
          <div className={styles['collaborate-cards']}>
            {renderCollaborateCards}
          </div>
        </div>
      </div>
      <PageMark>COLLABORATE / EP-03</PageMark>
    </Section>
  )
}

export default EpisodeOne
