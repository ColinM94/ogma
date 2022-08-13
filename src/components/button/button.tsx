import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { HtmlButton } from "types/general"
import { classes } from "utils/classes"

import styles from "./styles.module.scss"

interface ButtonProps extends HtmlButton {
  label?: string
  icon?: IconProp
}

export const Button = ({ label, className, icon, ...rest }: ButtonProps) => {
  return (
    <button className={classes(styles.button, className)} {...rest}>
      {label && <div className={styles.label}>{label}</div>}
      {icon && <FontAwesomeIcon icon={icon} className={styles.icon} />}
    </button>
  )
}
