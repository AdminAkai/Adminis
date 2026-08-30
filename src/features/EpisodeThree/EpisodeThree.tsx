import { FC } from 'react'

import PageMark from 'src/shared/components/PageMark/PageMark'
import ScrambleText from 'src/shared/components/ScrambleText'
import Section from 'src/shared/components/Section/Section'

import { Language } from 'src/shared/redux/settingsSlice/settingsInitial'
import { useAppSelector } from 'src/shared/redux/store'
import { selectLanguage } from 'src/shared/redux/settingsSlice/settingsSelectors'

import styles from './EpisodeThree.module.css'
import useInView from 'src/shared/hooks/useInView'

const EpisodeOne: FC = () => {
  const [ref, isInView] = useInView<HTMLDivElement>()

  const lang: Language = useAppSelector(selectLanguage)

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
              <ScrambleText text='HANDSHAKE' startOnLoad />
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
          <div className={styles['connection-cards']}>
            <div
              style={{
                border: '1px solid white',
              }}
            >
              <article>
                <header>1099</header>
              </article>
            </div>
            <div
              style={{
                border: '1px solid white',
              }}
            >
              <article>
                <header>W2</header>
              </article>
            </div>
            <div
              style={{
                border: '1px solid white',
              }}
            >
              <article>
                <header>C2C</header>
              </article>
            </div>
          </div>
        </div>
      </div>
      <PageMark>WORK / EP-03</PageMark>
    </Section>
  )
}

export default EpisodeOne
