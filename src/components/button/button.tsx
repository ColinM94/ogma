import { HtmlButton } from "types/general"
import { classes } from "utils/classes"

import styles from "./styles.module.scss"

interface ButtonProps extends HtmlButton {
  label: string
}

export const Button = ({ label, className, ...rest }: ButtonProps) => {
  return (
    <button className={styles.button} {...rest}>
      {label && <div className={classes(styles.label, className)}>{label}</div>}
    </button>
  )
}
