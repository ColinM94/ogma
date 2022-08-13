import { HtmlDiv } from "types/general"
import { classes } from "utils/classes"

import styles from "./styles.module.scss"

interface CardProps extends HtmlDiv {}

export const Card = ({ children, className, ...rest }: CardProps) => {
  return (
    <div className={classes(styles.card, className)} {...rest}>
      {children}
    </div>
  )
}
