import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { ClassName } from "types/general"
import { classes } from "utils/classes"

import styles from "./styles.module.scss"

interface ButtonProps {
  icon?: IconProp
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  className?: ClassName
  iconClassName?: ClassName
}

export const FloatingActionButton = (props: ButtonProps) => {
  const { icon, onClick, className, iconClassName } = props

  return (
    <button className={classes(styles.button, className)} onClick={onClick}>
      {icon && (
        <FontAwesomeIcon
          icon={icon || "plus"}
          className={classes(styles.icon, iconClassName)}
        />
      )}
    </button>
  )
}
