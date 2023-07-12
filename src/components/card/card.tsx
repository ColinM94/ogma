import { classes } from "utils"

import styles from "./styles.module.scss"
import { CardProps } from "./types"

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
