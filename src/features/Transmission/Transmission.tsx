import { FC } from 'react'

import PageMark from 'src/shared/components/PageMark/PageMark'
import TransmissionForm from 'src/shared/components/TransmissionForm'

import { Language } from 'src/shared/redux/settingsSlice/settingsInitial'
import { useAppSelector } from 'src/shared/redux/store'
import { selectLanguage } from 'src/shared/redux/settingsSlice/settingsSelectors'

import styles from './Transmission.module.css'
import TransmissionLink from 'src/shared/components/TransmissionLink'
import { transmissionLinks } from './lib'
import ScrambleText from 'src/shared/components/ScrambleText'
import TransmissionSector from 'src/shared/components/TransmissionSector'

const Transmission: FC = () => {
  // const [currentIndex, setCurrentIndex] = useState<number>(0)

  const lang: Language = useAppSelector(selectLanguage)

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prev) => (prev + 1) % taglineSubjects[lang].length)
  //   }, 2000)

  //   return () => clearInterval(interval)
  // }, [])

  return (
    <div className={styles['transmission-viewport']}>
      <div className={styles.transmission}>
        <TransmissionSector>
          <h1 className={styles['transmission-title']}>
            [<ScrambleText text='SIGNALIS' startOnLoad /> / TRANSMISSION]
          </h1>
          <div className={styles['transmission-subtitle']}>
            <p>BROADCAST YOUR&nbsp;</p>
            <div>
              <ScrambleText text='SIGNAL' startOnLoad />
              &#46;
            </div>
          </div>
          <div className={styles['transmission-links']}>
            {transmissionLinks.map((link) => (
              <TransmissionLink key={link.linkText} {...link} />
            ))}
          </div>
        </TransmissionSector>
        <TransmissionForm />
        <PageMark>TRANSMISSION / EP-OVA</PageMark>
      </div>
    </div>
  )
}

export default Transmission
