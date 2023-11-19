import { Children, ClassName } from 'types'

import { classes } from 'utils/classes'

import styles from './styles.module.scss'
import { FormFieldLabel } from './components/formFieldLabel/formFieldLabel'

export interface FormFieldProps {
  label: string
  className?: ClassName
  children?: Children
}

export const FormField = (props: FormFieldProps) => {
  const { label, className, children } = props

  return (
    <div className={classes(className, styles.container)}>
      <FormFieldLabel label={label} />
      {children}
    </div>
  )
}
