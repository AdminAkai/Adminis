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
      <div className={styles['ep-two']}>
        <div ref={ref} className={styles['ep-two-sector']}>
          <h1 className={styles['ep-two-title']}>
            [<ScrambleText text='Flow Control' startOnLoad={isInView} />
            &nbsp;/&nbsp;Collaborate]
          </h1>
          <div className={styles['ep-two-subtitle']}>
            ANY&nbsp;
            <div>
              <ScrambleText text='INTEGRATION' startOnLoad />
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
      </div>
      <PageMark>WORK / EP-03</PageMark>
    </Section>
  )
}

export default EpisodeOne
