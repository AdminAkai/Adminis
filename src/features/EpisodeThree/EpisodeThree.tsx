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
            <div className={styles['connection-card']}>
              <article>
                <header>1099</header>
                <summary>
                  Best for a focused problem or a few solutions. Independent
                  contributor for when you just need stuff done.
                </summary>
                <footer>PROTOCOL: INDEPENDENT CONTRACTOR</footer>
              </article>
            </div>
            <div className={styles['connection-card']}>
              <article>
                <header>C2C</header>
                <summary>
                  Different legal weight, more responsibility. I can contract
                  with you and invoice your business directly, or through an
                  intermediary. When you need someone with more ownership and
                  direction over a product than just some work done.
                </summary>
                <footer>PROTOCOL: BUSINESS-TO-BUSINESS</footer>
              </article>
            </div>
            <div className={styles['connection-card']}>
              <article>
                <header>W2</header>
                <summary>
                  For when you need someone really embedded into the team.
                  Whether through an agency or directly with you, when there's a
                  lot of stuff to build, for a long time.
                </summary>
                <footer>PROTOCOL: EMPLOYEE-OF-RECORD</footer>
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
