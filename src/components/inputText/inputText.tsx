import { HtmlInput, SetState } from "types"
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
      className={styles.input}
      {...rest}
    />
  )
}
