import { HtmlDiv } from "types/general"

import styles from "./styles.module.scss"

interface FlashCard extends HtmlDiv {}

export const FlashCard = ({ children, className, ...rest }: FlashCard) => {
  return (
    <div className={styles.card} {...rest}>
      {children}
    </div>
  )
}
