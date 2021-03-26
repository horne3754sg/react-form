import React, { useState, useCallback } from 'react'

const useForm = (defaultState: any) => {
  const [formData, setFormData] = useState(defaultState)

  const [formState, setFormState] = useState({
    submitted: false,
    submitting: false,
  })

  const toCamelCase = (str: string) => {
    return str
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase())
  }

  /**
   * Update the state when an input is changed
   */
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>): void => {
      if (!(event.target instanceof HTMLInputElement))
        return

      const { target } = event
      const value = target?.type === 'checkbox' ? target.checked : target.value
      const name = toCamelCase(target.name)

      setFormData({ ...formData, [name]: value })
    },
    [formData]
  )

  /**
   * Submit handler warps the user callback to add preventdefault and update form state
   */
  const handleSubmit = useCallback(
    (
      onSubmit: (formData: any) => any | Promise<any>
    ) => async (event?: React.BaseSyntheticEvent): Promise<void> => {

      if (event && event.preventDefault) {
        event.preventDefault()
        event.persist()
      }

      try {

        setFormState({ ...formState, submitting: true })

        await onSubmit(formData)

      } finally {

        setFormState({ ...formState, submitting: false })

      }
    },
    [formData, formState]
  )

  return { formData, formState, handleChange, handleSubmit }
}

export default useForm
