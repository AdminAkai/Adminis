import { FC } from 'react'

import Adminis from 'src/shared/components/Adminis'
import PageMark from 'src/shared/components/PageMark/PageMark'
import Section from 'src/shared/components/Section/Section'

import { Language } from 'src/shared/redux/settingsSlice/settingsInitial'
import { useAppSelector } from 'src/shared/redux/store'
import { selectLanguage } from 'src/shared/redux/settingsSlice/settingsSelectors'

import styles from './TestStage.module.css'

const TestStage: FC = () => {
  const lang: Language = useAppSelector(selectLanguage)

  return (
    <Section>
      <div className={styles['ep-one']}>
        <Adminis />
      </div>
      <PageMark>λ / EP-01</PageMark>
    </Section>
  )
}

export default TestStage
