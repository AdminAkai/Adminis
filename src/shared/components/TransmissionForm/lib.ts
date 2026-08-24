import { object, string, email } from 'zod'

import { TransmissionFormInputProps } from './TransmissionFormInput'
import { Language } from 'src/shared/redux/settingsSlice/settingsInitial'

export const turnstileKey = '0x4AAAAAAEXGoO0_Z4IaUzAC'

type transmissionFormInputType = {
  [Language.EN]: Omit<TransmissionFormInputProps, 'bracket'>
  [Language.JP]: Omit<TransmissionFormInputProps, 'bracket'>
}

export const transmissionFormInputs: transmissionFormInputType[] = [
  {
    en: {
      name: 'name',
      label: 'NAME',
      placeholder: 'DESIGNATION',
    },
    jp: {
      name: 'name',
      label: 'お名前',
      placeholder: '名称',
    },
  },
  {
    en: {
      name: 'email',
      label: 'EMAIL',
      placeholder: 'COMMUNICATIONS IDENTIFIER',
      type: 'email',
    },
    jp: {
      name: 'email',
      label: '電子メール',
      placeholder: '通信識別子',
      type: 'email',
    },
  },
  {
    en: {
      name: 'subject',
      label: 'SUBJECT',
      placeholder: 'PURPOSE',
      type: 'string',
    },
    jp: {
      name: 'subject',
      label: '件名',
      placeholder: '目的',
      type: 'string',
    },
  },
  {
    en: {
      name: 'message',
      label: 'MESSAGE',
      placeholder: 'TRANSCRIBE TEXT DATA',
      type: 'textarea',
    },
    jp: {
      name: 'message',
      label: 'メッセージ',
      placeholder: '録音放送',
      type: 'textarea',
    },
  },
]

export const transmissionFormHeaderTranslations = {
  content: {
    en: 'CONTENT',
    jp: '内容',
  },
  fields: {
    en: 'FIELDS',
    jp: '入力欄',
  },
  channel: {
    en: 'CHANNEL',
    jp: '通信路',
  },
  channelText: {
    transmitting: {
      en: 'TRANSMITTING. . .',
      jp: '送信する. . .',
    },
    closed: {
      en: 'CLOSED',
      jp: '切断',
    },
    open: {
      en: 'OPEN',
      jp: '空き',
    },
  },
}

const transmissionFormValidationTranslations = {
  name: [
    {
      en: 'Invalid designation.',
      jp: '効な名称.',
    },
    {
      en: 'Designation required.',
      jp: '名称必要.',
    },
  ],
  email: [
    {
      en: 'Invalid comms identifier.',
      jp: '効な通信識別子',
    },
    {
      en: 'Comms identifier required.',
      jp: '通信識別子必要',
    },
  ],
  subject: [
    {
      en: 'Invalid purpose.',
      jp: '効な目的',
    },
    {
      en: 'Purpose required.',
      jp: '目的必要',
    },
  ],
  message: [
    {
      en: 'Invalid text data.',
      jp: '効な録音放送',
    },
    {
      en: 'Text data required.',
      jp: '録音放送必要',
    },
  ],
}

export const TransmissionFormValidation = (lang: Language) =>
  object({
    name: string(transmissionFormValidationTranslations.name[0][lang]).min(
      1,
      transmissionFormValidationTranslations.name[1][lang]
    ),
    email: email(transmissionFormValidationTranslations.email[0][lang]).min(
      1,
      transmissionFormValidationTranslations.email[1][lang]
    ),
    subject: string(
      transmissionFormValidationTranslations.subject[0][lang]
    ).min(1, transmissionFormValidationTranslations.subject[0][lang]),
    message: string(
      transmissionFormValidationTranslations.message[0][lang]
    ).min(1, transmissionFormValidationTranslations.subject[1][lang]),
  })
