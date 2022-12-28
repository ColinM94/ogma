import { Button } from "components"
import { SetState } from "types"
import { classes } from "utils"

import styles from "./styles.module.scss"

interface Props<T> {
  show: boolean
  setShow: SetState<boolean>
  className?: string
}

export const ListControlsFilter = <T,>(props: Props<T>) => {
  const { show, setShow, className } = props

  const handleClick = () => {
    setShow((prev) => !prev)
  }

  return (
    <Button
      iconLeft="filter"
      onClick={handleClick}
      title="Filters"
      className={classes(styles.button, className, show && styles.buttonActive)}
      iconClassName={styles.buttonIcon}
    />
  )
}
