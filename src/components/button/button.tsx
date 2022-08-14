import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ClassName, HtmlButton } from "types/general"
import { classes } from "utils/classes"

import styles from "./styles.module.scss"

interface ButtonProps {
  label?: string
  icon?: IconProp
  type?: "default" | "icon"
  className: ClassName
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined
}

export const Button = (props: ButtonProps) => {
  const { label, className, icon, type = "default", onClick } = props

  const style = () => {
    return classes(
      styles.button,
      type === "default" && styles.defaultBtn,
      type === "icon" && styles.iconBtn,
      className
    )
  }

  return (
    <button className={style()} onClick={onClick}>
      {label && <div className={styles.label}>{label}</div>}
      {icon && <FontAwesomeIcon icon={icon} className={styles.icon} />}
    </button>
  )
}
