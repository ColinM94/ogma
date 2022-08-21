import { Children, ClassName } from "types/general"
import { classes } from "utils/classes"
import styles from "./styles.module.scss"

interface CardProps {
  children?: Children
  className?: ClassName
  onClick?: () => void
}

export const Card = ({ children, className, onClick, ...rest }: CardProps) => {
  return (
    <div
      className={classes(styles.card, className, onClick && styles.clickable)}
      onClick={onClick}
      {...rest}
    >
      {children}
    </div>
  )
}
