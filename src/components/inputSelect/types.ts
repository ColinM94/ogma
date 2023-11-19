import { FormFieldProps } from 'components'
import React from 'react'

export type InputSelectOption<T> = { label?: string; value: T; hidden?: boolean }

export interface InputSelectProps<T> extends FormFieldProps {
  options: InputSelectOption<T>[]
  value?: T
  setValue: (value: T, e: React.ChangeEvent<HTMLSelectElement>) => void
  disabled?: boolean
  inputClassName?: string
  labelContainerClassName?: string
  /** First option will have undefined value. */
  undefinedOption?: boolean
}
