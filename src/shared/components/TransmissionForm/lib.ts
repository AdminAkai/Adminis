import { z } from 'zod'

import { TransmissionFormInputProps } from './TransmissionFormInput'

export const turnstileKey = '0x4AAAAAAEXGoO0_Z4IaUzAC'

export const transmissionFormInputs: Omit<
  TransmissionFormInputProps,
  'bracket'
>[] = [
  {
    name: 'name',
    label: 'NAME',
    placeholder: 'FLESH LABEL',
  },
  {
    name: 'email',
    label: 'EMAIL',
    placeholder: 'COMMS IDENTIFIER',
    type: 'email',
  },
  {
    name: 'subject',
    label: 'SUBJECT',
    placeholder: 'CONTENT TOPIC - OPTIONAL',
    type: 'email',
  },
  {
    name: 'message',
    label: 'MESSAGE',
    placeholder: 'HOW CAN I CONTRIBUTE TO YOUR CAUSE?',
    type: 'textarea',
  },
]

export const extractFormData = (formData: FormData) => {
  const rawData: { [key: string]: unknown } = {}

  for (const [key, value] of formData) {
    rawData[key] = value
  }

  return rawData
}

const TransmissionFormScheme = z.object({
  name: z.string(),
  email: z.email(),
  subject: z.string(),
  message: z.string(),
})

export const handleSendTransmission = (formData: FormData) => {
  const rawData = extractFormData(formData)

  try {
    const validatedFields = TransmissionFormScheme.safeParse(rawData)

    if (!validatedFields.success) {
      // handle return error object
      return
    }
  } catch (err) {
    console.error(err)
  }
}
