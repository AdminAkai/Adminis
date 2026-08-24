import { FC } from 'react'

import styles from './TransmissionFormInput.module.css'

export type TransmissionFormInputProps = {
  name: string
  label: string
  placeholder: string
  bracket: string
  disabled?: boolean
  required?: boolean
  error?: string
  type?: string
}

const TransmissionFormInput: FC<TransmissionFormInputProps> = ({
  name,
  label,
  placeholder,
  bracket,
  disabled,
  required,
  error,
  type = 'text',
}) => (
  <label
    htmlFor={name}
    className={`${styles['transmission-form-input-label']} ${error && error !== '' && styles['transmission-form-input-label-error']}`}
  >
    <p className={styles['transmission-form-input-label-header']}>
      {bracket} / {label}
      {error && error !== '' && <span>&nbsp;/ {error}</span>}
    </p>
    {type === 'textarea' ? (
      <textarea
        id={name}
        name={name}
        className={styles['transmission-form-input']}
        placeholder={placeholder}
        required={required}
        rows={4}
        maxLength={5000}
        disabled={disabled}
      />
    ) : (
      <input
        id={name}
        name={name}
        className={styles['transmission-form-input']}
        placeholder={placeholder}
        type={type}
        required={required}
        disabled={disabled}
      />
    )}
  </label>
)

export default TransmissionFormInput
