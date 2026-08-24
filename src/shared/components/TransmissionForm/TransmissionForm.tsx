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

  const [sendTransmission, { loading }] = useMutation(SendTransmissionDocument)

  const [turnstileToken, setTurnstileToken] = useState<string>('')
  const [fieldErrors, setFieldErrors] = useState<{
    [key: string]: string[] | undefined
  }>({})

  const handleSendTransmission: SubmitEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    setFieldErrors({})
    const formData = new FormData(e.currentTarget)
    const rawData = extractFormData(formData)

    try {
      const validatedFields = TransmissionFormValidation.safeParse(rawData)

      if (!validatedFields.success || turnstileToken === '') {
        let errors: { [key: string]: string[] } = {}
        if (turnstileToken === '')
          errors['turnstileToken'] = ['Humanity required.']
        if (!validatedFields.success)
          errors = flattenError(validatedFields.error).fieldErrors
        setFieldErrors(errors)
        return
      }

      const transmission = { ...validatedFields.data, turnstileToken }

      sendTransmission({ variables: transmission })
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
      <TransmissionFormHeader loading={loading} errors={hasErrors} />
      <form
        className={styles['transmission-form']}
        onSubmit={handleSendTransmission}
      >
        {transmissionFormInputs.map((input, i) => (
          <TransmissionFormInput
            key={`${input.name}-input`}
            bracket={`0${i + 1}`}
            error={fieldErrors[input.name]?.[0]}
            disabled={loading}
            {...input}
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
