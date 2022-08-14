import { Children, ClassName } from "types"
import { classes } from "utils/classes"

import styles from "./styles.module.scss"

interface InputContainerProps {
  className: ClassName
  children: Children
}

export const InputContainer = (props: InputContainerProps) => {
  const { className, children } = props

  return <div className={classes(className, styles.container)}>{children}</div>
}
