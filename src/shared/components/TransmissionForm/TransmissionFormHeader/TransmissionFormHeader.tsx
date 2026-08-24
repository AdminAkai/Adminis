import { FC } from 'react'

import { transmissionFormInputs } from '../lib'

import styles from './TransmissionFormHeader.module.css'
import ScrambleText from '../../ScrambleText'

type TransmissionFormHeaderProps = {
  disabled?: boolean
  errors?: { [key: string]: string[] | undefined }
}

const TransmissionFormHeader: FC<TransmissionFormHeaderProps> = ({
  disabled,
  errors,
}) => {
  const hasErrors =
    errors && Object.keys(errors).length !== 0
      ? 'transmission-form-header-closed'
      : ''

  return (
    <div className={styles['transmission-form-header']}>
      <p
        className={`${styles['transmission-form-header-title']} ${styles[hasErrors]}`}
      >
        CONTENT / <span>{transmissionFormInputs.length} FIELDS</span>
      </p>
      <p
        className={`${styles['transmission-form-header-title']} ${styles[hasErrors]}`}
      >
        [CHANNEL{' '}
        <ScrambleText
          text={disabled || hasErrors ? 'CLOSED' : 'OPEN'}
          startOnLoad
        />
        ]
      </p>
    </div>
  )
}

export default TransmissionFormHeader
