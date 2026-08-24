import { FC, useMemo } from 'react'

import { transmissionFormInputs } from '../lib'

import styles from './TransmissionFormHeader.module.css'
import ScrambleText from '../../ScrambleText'

type TransmissionFormHeaderProps = {
  loading?: boolean
  errors?: boolean
}

const TransmissionFormHeader: FC<TransmissionFormHeaderProps> = ({
  loading,
  errors,
}) => {
  const errorStyling = useMemo(() => {
    if (errors) return 'transmission-form-header-closed'
    if (loading) return 'transmission-form-header-loading'
    return ''
  }, [loading, errors])

  const channelText = useMemo(() => {
    if (loading) return 'TRANSMITTING. . .'
    if (errors) return 'CLOSED'
    return 'OPEN'
  }, [loading, errors])

  return (
    <div className={styles['transmission-form-header']}>
      <p
        className={`${styles['transmission-form-header-title']} ${styles[errorStyling]}`}
      >
        CONTENT / <span>{transmissionFormInputs.length} FIELDS</span>
      </p>
      <p
        className={`${styles['transmission-form-header-title']} ${styles[errorStyling]}`}
      >
        [CHANNEL <ScrambleText text={channelText} startOnLoad />]
      </p>
    </div>
  )
}

export default TransmissionFormHeader
