export const extractFormData = (formData: FormData) => {
  const rawData: { [key: string]: unknown } = {}

  for (const [key, value] of formData) {
    rawData[key] = value
  }

  return rawData
}
