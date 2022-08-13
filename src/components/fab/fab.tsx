import { HtmlButton } from "types/general"
import { classes } from "utils/classes"

import styles from "./styles.module.scss"

interface FABProps extends HtmlButton {
  label: string
}

export const FAB = ({ label, className, ...rest }: FABProps) => {
  return (
    <button className={styles.button} {...rest}>
      {label && (
        <div className={classes(styles.button, className)}>{label}</div>
      )}
    </button>
  )
}
