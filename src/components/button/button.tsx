import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { ClassName } from "types/general"
import { classes } from "utils/classes"

import styles from "./styles.module.scss"

interface ButtonProps {
  label?: string
  icon?: IconProp
  type?: "default" | "icon" | "floating"
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  className?: ClassName
  iconClassName?: ClassName
}

export type ButtonClickEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>

export const Button = (props: ButtonProps) => {
  const {
    label,
    icon,
    type = "default",
    onClick,
    className,
    iconClassName,
  } = props

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
      {icon && (
        <FontAwesomeIcon
          icon={icon}
          className={classes(styles.icon, iconClassName)}
        />
      )}
      {label && <div className={styles.label}>{label}</div>}
    </button>
  )
}
