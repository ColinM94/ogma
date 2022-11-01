import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { FormField } from "components"
import { ClassName, HtmlInput } from "types"
import { classes } from "utils"

import styles from "./styles.module.scss"

interface InputTextProps<T extends string> extends HtmlInput {
  setValue: (value: T) => void
  inputClassName?: ClassName
  icon?: IconProp
}

export const InputText = <T extends string>(props: InputTextProps<T>) => {
  const { value, setValue, className, inputClassName, icon, ...rest } = props

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value as T)
  }

  return (
    <FormField className={classes(styles.inputContainer, className)}>
      <input
        value={value}
        onChange={handleChange}
        className={classes(styles.input, inputClassName)}
        {...rest}
      />
      {icon && (
        <FontAwesomeIcon
          icon={icon}
          className={styles.icon}
          pointerEvents="none"
        />
      )}
    </FormField>
  )
}
