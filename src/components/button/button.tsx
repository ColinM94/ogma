import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { ClassName } from "types/general"
import { classes } from "utils/classes"

import styles from "./styles.module.scss"

interface ButtonProps {
  label?: string
  icon?: IconProp
  type?: "default" | "icon" | "floating"
  className?: ClassName
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const Button = (props: ButtonProps) => {
  const { label, className, icon, type = "default", onClick } = props

  const style = () => {
    switch (type) {
      case "default":
        return styles.defaultBtn
      case "icon":
        return styles.iconBtn
      case "floating":
        return styles.floatingBtn
    }
  }

  return (
    <button
      className={classes(styles.button, className, style())}
      onClick={onClick}
    >
      {label && <div className={styles.label}>{label}</div>}
      {icon && <FontAwesomeIcon icon={icon} className={styles.icon} />}
    </button>
  )
}
