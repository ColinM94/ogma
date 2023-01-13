import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { Children, ClassName } from "types/general"
import { classes } from "utils/classes"

import styles from "./styles.module.scss"

interface ButtonProps {
  type?: "default" | "icon"
  label?: string
  iconLeft?: IconProp
  iconRight?: IconProp
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  title?: string
  children?: Children
  showBackground?: boolean
  className?: ClassName
  iconClassName?: ClassName
}

export const Button = (props: ButtonProps) => {
  const {
    type = "default",
    label,
    iconLeft,
    iconRight,
    onClick,
    title,
    className,
    iconClassName,
  } = props

  const style = () => {
    return classes(
      className,
      styles.button,
      !label && styles.iconOnly,
      type === "default" && styles.default
    )
  }

  return (
    <button className={style()} onClick={onClick} title={title}>
      {iconLeft && (
        <FontAwesomeIcon
          icon={iconLeft}
          className={classes(styles.icon, iconClassName)}
        />
      )}

      {label && <div className={styles.label}>{label}</div>}

      {iconRight && (
        <FontAwesomeIcon
          icon={iconRight}
          className={classes(styles.icon, iconClassName)}
        />
      )}
    </button>
  )
}
