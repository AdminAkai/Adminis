import { FC } from 'react'

import TransmissionSector from 'src/shared/components/TransmissionSector'
import ScrambleText from 'src/shared/components/ScrambleText'
import PageMark from 'src/shared/components/PageMark/PageMark'
import TransmissionLink from 'src/shared/components/TransmissionLink'

import { Language } from 'src/shared/redux/settingsSlice/settingsInitial'
import { useAppSelector } from 'src/shared/redux/store'
import { selectLanguage } from 'src/shared/redux/settingsSlice/settingsSelectors'

import {
  transmissionLinks,
  transmissionTitleTranslations,
} from '../Transmission/lib'

import { receivedTranslation } from './lib'

import styles from './Received.module.css'

const Received: FC = () => {
  const lang: Language = useAppSelector(selectLanguage)

  return (
    <div className={styles['received-viewport']}>
      <div className={styles.received}>
        <TransmissionSector>
          <h1 className={styles['received-title']}>
            [<ScrambleText text='SIGNALIS' startOnLoad /> /{' '}
            {receivedTranslation[lang]}]
          </h1>
          <div className={styles['received-subtitle']}>
            <p>{transmissionTitleTranslations.transmission[lang]}&nbsp;</p>
            <div>
              <ScrambleText text={receivedTranslation[lang]} startOnLoad />
              &#46;
            </div>
          </div>
          <div className={styles['received-links']}>
            {transmissionLinks.map((link) => (
              <TransmissionLink key={link.linkText} {...link} />
            ))}
          </div>
        </TransmissionSector>
        <PageMark>RECEIVED / EP-OVA</PageMark>
      </div>
    </div>
  )
}

export default Received
