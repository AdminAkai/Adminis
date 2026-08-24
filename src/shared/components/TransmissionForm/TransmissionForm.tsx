import { FC, SubmitEventHandler, useMemo, useState } from 'react'
import { flattenError } from 'zod'

import { Turnstile } from '@marsidev/react-turnstile'

import TransmissionFormInput from './TransmissionFormInput'
import TransmissionButton from '../TransmissionButton'

import useMediaQuery from 'src/shared/hooks/useMediaQuery'
import { extractFormData } from 'src/shared/utils/formUtils'

import {
  transmissionFormInputs,
  TransmissionFormValidation,
  turnstileKey,
} from './lib'

import styles from './TransmissionForm.module.css'
import { useMutation } from '@apollo/client'
import { SendTransmissionDocument } from 'src/shared/graphql/__generated__/graphql'
import TransmissionSector from '../TransmissionSector'
import TransmissionFormHeader from './TransmissionFormHeader'

const TransmissionForm: FC = () => {
  const isMobile = useMediaQuery('(max-width: 959px)')

  const [sendTransmission, { loading, error, data }] = useMutation(
    SendTransmissionDocument
  )

  const [turnstileToken, setTurnstileToken] = useState<string>('')
  const [fieldErrors, setFieldErrors] = useState<{
    [key: string]: string[] | undefined
  }>({})

  const handleSendTransmission: SubmitEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    setFieldErrors({})
    const formData = new FormData(e.currentTarget)
    const rawData = extractFormData(formData)

    console.log(fieldErrors)

    try {
      const validatedFields = TransmissionFormValidation.safeParse(rawData)

      if (!validatedFields.success) {
        const errors = flattenError(validatedFields.error)
        setFieldErrors(errors.fieldErrors)
        return
      }
    } catch (err) {
      console.error(err)
      return
    }
  }

  const hasErrors = useMemo(
    () => Object.keys(fieldErrors).length !== 0,
    [fieldErrors]
  )

  return (
    <TransmissionSector>
      <TransmissionFormHeader disabled={loading} errors={fieldErrors} />
      <form
        className={styles['transmission-form']}
        onSubmit={handleSendTransmission}
      >
        {transmissionFormInputs.map((input, i) => (
          <TransmissionFormInput
            key={`${input.name}-input`}
            bracket={`0${i + 1}`}
            error={fieldErrors[input.name]?.[0]}
            // disabled={loading}
            disabled={loading}
            {...input}
          />
        ))}
        <div className={styles['transmission-turnstile']}>
          <Turnstile
            siteKey={turnstileKey}
            onSuccess={setTurnstileToken}
            options={{ theme: 'dark', size: isMobile ? 'compact' : 'flexible' }}
          />
        </div>
        <TransmissionButton
          style={{ alignSelf: 'flex-end' }}
          disabled={loading}
          errors={hasErrors}
        />
      </form>
      {hasErrors && <mark className={styles['transmission-closed']} />}
    </TransmissionSector>
  )
}

export default TransmissionForm
