import { FC } from 'react'

import PageMark from 'src/shared/components/PageMark/PageMark'
import TransmissionForm from 'src/shared/components/TransmissionForm'
import ScrambleText from 'src/shared/components/ScrambleText'
import TransmissionSector from 'src/shared/components/TransmissionSector'
import TransmissionLink from 'src/shared/components/TransmissionLink'

import { Language } from 'src/shared/redux/settingsSlice/settingsInitial'
import { useAppSelector } from 'src/shared/redux/store'
import { selectLanguage } from 'src/shared/redux/settingsSlice/settingsSelectors'

import { transmissionLinks, transmissionTitleTranslations } from './lib'

import styles from './Transmission.module.css'

const Transmission: FC = () => {
  const lang: Language = useAppSelector(selectLanguage)

  return (
    <div className={styles['transmission-viewport']}>
      <div className={styles.transmission}>
        <TransmissionSector>
          <h1 className={styles['transmission-title']}>
            [<ScrambleText text='SIGNALIS' startOnLoad /> /{' '}
            {transmissionTitleTranslations.transmission[lang]}]
          </h1>
          <div className={styles['transmission-subtitle']}>
            <p>{transmissionTitleTranslations.broadcast[lang]}&nbsp;</p>
            <div>
              <ScrambleText
                text={transmissionTitleTranslations.signal[lang]}
                startOnLoad
              />
              &#46;
            </div>
          </div>
          <div className={styles['transmission-links']}>
            {transmissionLinks.map((link) => (
              <TransmissionLink key={link.linkText} {...link} />
            ))}
          </div>
        </TransmissionSector>
        <TransmissionForm lang={lang} />
        <PageMark>TRANSMISSION / EP-OVA</PageMark>
      </div>
    </div>
  )
}

export default Transmission
