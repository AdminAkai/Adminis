import { FC } from 'react'

import PageMark from 'src/shared/components/PageMark/PageMark'
import Section from 'src/shared/components/Section/Section'

import useInView from 'src/shared/hooks/useInView'

import { Language } from 'src/shared/redux/settingsSlice/settingsInitial'
import { useAppSelector } from 'src/shared/redux/store'
import { selectLanguage } from 'src/shared/redux/settingsSlice/settingsSelectors'

import styles from './EpisodeTwo.module.css'

const EpisodeTwo: FC = () => {
  const lang: Language = useAppSelector(selectLanguage)

  const [ref, isInView] = useInView<HTMLDivElement>()

  return (
    <Section style={{ height: 'auto', minHeight: 'initial' }}>
      <div ref={ref} className={styles['ep-two']}>
        <div
          style={{
            border: '1px solid blue',
            position: isInView ? 'fixed' : 'initial',
            top: isInView ? '50%' : '',
            left: isInView ? '50%' : '',
            transform: 'translate(-50%, -50%)',
            alignSelf: 'flex-start',
          }}
        >
          test
        </div>
        <ul style={{ width: '100%', height: 'auto' }}>
          <li style={{ height: 400, width: 400, border: '1px solid white' }}>
            test
          </li>
          <li style={{ height: 400, width: 400, border: '1px solid white' }}>
            test
          </li>
          <li style={{ height: 400, width: 400, border: '1px solid white' }}>
            test
          </li>
          <li style={{ height: 400, width: 400, border: '1px solid white' }}>
            test
          </li>
          <li style={{ height: 400, width: 400, border: '1px solid white' }}>
            test
          </li>
          <li style={{ height: 400, width: 400, border: '1px solid white' }}>
            test
          </li>
          <li style={{ height: 400, width: 400, border: '1px solid white' }}>
            test
          </li>
          <li style={{ height: 400, width: 400, border: '1px solid white' }}>
            test
          </li>
        </ul>
      </div>
      <PageMark>SERVICES / EP-02</PageMark>
    </Section>
  )
}

export default EpisodeTwo
