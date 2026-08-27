import { FC } from 'react'

import PageMark from 'src/shared/components/PageMark/PageMark'
import Section from 'src/shared/components/Section/Section'

import useInView from 'src/shared/hooks/useInView'

import { Language } from 'src/shared/redux/settingsSlice/settingsInitial'
import { useAppSelector } from 'src/shared/redux/store'
import { selectLanguage } from 'src/shared/redux/settingsSlice/settingsSelectors'

import styles from './EpisodeTwo.module.css'
import ScrambleText from 'src/shared/components/ScrambleText'
import AbilitiesCard from 'src/shared/components/AbilitiesCard'

const EpisodeTwo: FC = () => {
  const lang: Language = useAppSelector(selectLanguage)

  const [ref, isInView] = useInView<HTMLDivElement>()

  return (
    <Section style={{ height: 'auto', minHeight: 'initial' }}>
      <div ref={ref} className={styles['ep-two']}>
        <div
          className={styles['ep-two-sector']}
          style={{
            position: isInView ? 'fixed' : 'initial',
            top: isInView ? '50%' : '',
            left: isInView ? '25%' : '',
            opacity: isInView ? '100%' : '0',
          }}
        >
          <h1 className={styles['transmission-title']}>
            [<ScrambleText text='Abilities' startOnLoad={isInView} />{' '}
            /&nbsp;Services]
          </h1>
          <div className={styles['transmission-subtitle']}>
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
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'clamp(60px, 19vh, 180px)',
            width: '40%',
            marginTop: '18%',
          }}
        >
          <AbilitiesCard />
          <div style={{ height: 400, width: 400, border: '1px solid white' }}>
            test
          </div>
          <div style={{ height: 400, width: 400, border: '1px solid white' }}>
            test
          </div>
          <div style={{ height: 400, width: 400, border: '1px solid white' }}>
            test
          </div>
          <div style={{ height: 400, width: 400, border: '1px solid white' }}>
            test
          </div>
          <div style={{ height: 400, width: 400, border: '1px solid white' }}>
            test
          </div>
          <div style={{ height: 400, width: 400, border: '1px solid white' }}>
            test
          </div>
          <div style={{ height: 400, width: 400, border: '1px solid white' }}>
            test
          </div>
        </div>
      </div>
      <PageMark>SERVICES / EP-02</PageMark>
    </Section>
  )
}

export default EpisodeTwo
