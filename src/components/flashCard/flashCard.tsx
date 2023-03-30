import { Children, ClassName, FlashCardInfo } from "types"
import { classes } from "utils/classes"

import styles from "./styles.module.scss"

interface Props {
  info: FlashCardInfo
  children?: Children
  className?: ClassName
}

export const FlashCard = (props: Props) => {
  const { info, children, className, ...rest } = props

  return (
    <div className={classes(styles.container, className)} {...rest}>
      <div className={styles.front}>{info.front}</div>
      <div className={styles.divider} />
      <div className={styles.back}>{info.back}</div>
    </div>
  )
}
