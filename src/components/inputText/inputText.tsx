import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FormField } from "components"

import { ClassName, HtmlInput, SetState } from "types"
import { classes } from "utils/classes"

import styles from "./styles.module.scss"

interface InputTextProps extends HtmlInput {
  setValue: SetState<string>
  inputClassName?: ClassName
  icon?: IconProp
}

export const InputText = (props: InputTextProps) => {
  const { value, setValue, className, inputClassName, icon, ...rest } = props

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <FormField className={styles.inputContainer}>
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
