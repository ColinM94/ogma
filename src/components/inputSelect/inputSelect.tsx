import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { FormField } from 'components'
import { classes } from 'utils'

import styles from './styles.module.scss'
import { InputSelectOption, InputSelectProps } from './types'

export const InputSelect = <T extends string>(props: InputSelectProps<T>) => {
  const { className, inputClassName, options, value, setValue, undefinedOption, ...rest } = props

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value as T, e)
  }

  const optionItem = (option: InputSelectOption<T>) => {
    if (option.hidden) {
      return null
    }

    const _value = option.value
    const _label = option.label

    return (
      <option value={_value} key={_value}>
        {_label}
      </option>
    )
  }

  // If options change after render, and the value is not in the options, set the value to the first option.
  React.useEffect(() => {
    if (!options.some((option) => option.value === value)) {
      options[0]?.value && setValue(options[0].value, {} as any)
    }
  }, [options])

  return (
    <FormField className={classes(className, styles.container)} {...rest}>
      <select
        className={classes(styles.input, inputClassName)}
        onChange={handleChange}
        value={value as T}
        {...rest}
      >
        {undefinedOption && <option key="UNDEFINED_OPTION" value={undefined} />}
        {options.map((option) => optionItem(option))}
      </select>
      <FontAwesomeIcon icon="chevron-down" className={styles.icon} />
    </FormField>
  )
}
