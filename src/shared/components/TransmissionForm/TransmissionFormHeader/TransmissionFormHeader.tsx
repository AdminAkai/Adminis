import { FC, useMemo } from 'react'

import ScrambleText from '../../ScrambleText'

import { Language } from 'src/shared/redux/settingsSlice/settingsInitial'

import {
  transmissionFormHeaderTranslations,
  transmissionFormInputs,
} from '../lib'

import styles from './TransmissionFormHeader.module.css'

type TransmissionFormHeaderProps = {
  lang: Language
  loading?: boolean
  errors?: boolean
}

const TransmissionFormHeader: FC<TransmissionFormHeaderProps> = ({
  lang,
  loading,
  errors,
}) => {
  const errorStyling = useMemo(() => {
    if (errors) return 'transmission-form-header-closed'
    if (loading) return 'transmission-form-header-loading'
    return ''
  }, [loading, errors])

  const channelText = useMemo(() => {
    if (loading)
      return transmissionFormHeaderTranslations.channelText.transmitting[lang]
    if (errors)
      return transmissionFormHeaderTranslations.channelText.closed[lang]
    return transmissionFormHeaderTranslations.channelText.open[lang]
  }, [lang, loading, errors])

  return (
    <div className={styles['transmission-form-header']}>
      <p
        className={`${styles['transmission-form-header-title']} ${styles[errorStyling]}`}
      >
        {transmissionFormHeaderTranslations.content[lang]} /{' '}
        <span>
          {transmissionFormInputs.length}{' '}
          {transmissionFormHeaderTranslations.fields[lang]}
        </span>
      </p>
      <p
        className={`${styles['transmission-form-header-title']} ${styles[errorStyling]}`}
      >
        [{transmissionFormHeaderTranslations.channel[lang]}{' '}
        <ScrambleText text={channelText} startOnLoad />]
      </p>
    </div>
  )
}

export default TransmissionFormHeader
