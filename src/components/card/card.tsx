import { HtmlDiv } from "types/general"

import styles from "./styles.module.scss"

interface CardProps extends HtmlDiv {}

export const Card = ({ children, className, ...rest }: CardProps) => {
  return (
    <div className={styles.card} {...rest}>
      {children}
    </div>
  )
}
