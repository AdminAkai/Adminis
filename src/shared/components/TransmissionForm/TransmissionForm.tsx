import { FC, SubmitEventHandler, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { flattenError } from 'zod'
import { useMutation } from '@apollo/client'

import { Turnstile } from '@marsidev/react-turnstile'

import TransmissionFormInput from './TransmissionFormInput'
import TransmissionButton from '../TransmissionButton'
import TransmissionSector from '../TransmissionSector'
import TransmissionFormHeader from './TransmissionFormHeader'

import useMediaQuery from 'src/shared/hooks/useMediaQuery'
import { extractFormData } from 'src/shared/utils/formUtils'
import { Language } from 'src/shared/redux/settingsSlice/settingsInitial'
import { SendTransmissionDocument } from 'src/shared/graphql/__generated__/graphql'

import {
  transmissionFormInputs,
  TransmissionFormValidation,
  turnstileKey,
} from './lib'

import styles from './TransmissionForm.module.css'

type TransmissionFormProps = {
  lang: Language
}

const TransmissionForm: FC<TransmissionFormProps> = ({ lang }) => {
  const navigate = useNavigate()

  const [sendTransmission, { loading }] = useMutation(
    SendTransmissionDocument,
    {
      onCompleted: () => {
        setFieldErrors({})
        navigate('/received')
      },
    }
  )

  const isMobile = useMediaQuery('(max-width: 959px)')

  const [turnstileToken, setTurnstileToken] = useState<string>('')
  const [fieldErrors, setFieldErrors] = useState<{
    [key: string]: string[] | undefined
  }>({})

  console.log(fieldErrors)
  console.log(turnstileToken)

  const handleSendTransmission: SubmitEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    setFieldErrors({})
    const formData = new FormData(e.currentTarget)
    const rawData = extractFormData(formData)

    try {
      const validatedFields =
        TransmissionFormValidation(lang).safeParse(rawData)

      if (!validatedFields.success || turnstileToken === '') {
        let errors: { [key: string]: string[] } = {}
        console.log('turnstiletoken', turnstileToken === '')
        if (!validatedFields.success)
          errors = flattenError(validatedFields.error).fieldErrors
        if (turnstileToken === '')
          errors['turnstileToken'] = ['Humanity required.']
        setFieldErrors(errors)
        return
      }

      const transmission = { ...validatedFields.data, turnstileToken }

      sendTransmission({ variables: transmission })
    } catch (err) {
      console.error(err)
      return
    } finally {
      e.target.reset()
    }
  }

  const hasErrors = useMemo(
    () => Object.keys(fieldErrors).length !== 0,
    [fieldErrors]
  )

  return (
    <TransmissionSector>
      <TransmissionFormHeader
        loading={loading}
        errors={hasErrors}
        lang={lang}
      />
      <form
        className={styles['transmission-form']}
        onSubmit={handleSendTransmission}
      >
        {transmissionFormInputs.map((input, i) => (
          <TransmissionFormInput
            key={`${input[lang].name}-input`}
            bracket={`0${i + 1}`}
            error={fieldErrors[input[Language.EN].name]?.[0]}
            disabled={loading}
            {...input[lang]}
          />
        ))}
        <div className={styles['transmission-turnstile']}>
          <Turnstile
            siteKey={turnstileKey}
            onSuccess={setTurnstileToken}
            options={{ theme: 'dark', size: isMobile ? 'compact' : 'normal' }}
          />
          {fieldErrors['turnstileToken'] && (
            <span>{fieldErrors['turnstileToken'][0]}</span>
          )}
        </div>
        <TransmissionButton
          style={{ alignSelf: 'flex-end' }}
          loading={loading}
          errors={hasErrors}
        />
      </form>
      {hasErrors && <mark className={styles['transmission-closed']} />}
    </TransmissionSector>
  )
}

export default TransmissionForm
