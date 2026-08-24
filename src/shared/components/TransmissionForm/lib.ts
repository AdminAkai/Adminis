import { object, string, email, ZodFlattenedError } from 'zod'

import { TransmissionFormInputProps } from './TransmissionFormInput'

export const turnstileKey = '0x4AAAAAAEXGoO0_Z4IaUzAC'

export const transmissionFormInputs: Omit<
  TransmissionFormInputProps,
  'bracket'
>[] = [
  {
    name: 'name',
    label: 'NAME',
    placeholder: 'DESIGNATION',
  },
  {
    name: 'email',
    label: 'EMAIL',
    placeholder: 'COMMUNICATIONS IDENTIFIER',
    type: 'email',
  },
  {
    name: 'subject',
    label: 'SUBJECT',
    placeholder: 'PURPOSE',
    type: 'string',
  },
  {
    name: 'message',
    label: 'MESSAGE',
    placeholder: 'TRANSCRIBED TEXT DATA',
    type: 'textarea',
  },
]

export const TransmissionFormValidation = object({
  name: string('Invalid designation.').min(1, 'Designation required.'),
  email: email('Invalid comms identifier.').min(
    1,
    'Communications identifier required.'
  ),
  subject: string('Invalid content topic.').min(1, 'Required.'),
  message: string('Invalid content message.').min(
    1,
    'Content message required.'
  ),
})
