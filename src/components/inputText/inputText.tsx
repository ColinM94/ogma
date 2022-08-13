import { HtmlInput, SetState } from "types"
import { classes } from "utils/classes"
import styles from "./styles.module.scss"

interface InputTextProps extends HtmlInput {
  setValue: SetState<string>
}

export const InputText = (props: InputTextProps) => {
  const { value, setValue, className, ...rest } = props

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <input
      value={value}
      onChange={handleChange}
      className={classes(styles.input, className)}
      {...rest}
    />
  )
}
