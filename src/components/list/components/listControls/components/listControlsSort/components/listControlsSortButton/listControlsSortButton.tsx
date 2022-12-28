import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { Button, ListProps } from "components"
import { ListControl } from "components/list/types"
import { SetState } from "types"
import { classes } from "utils"

import styles from "./styles.module.scss"

interface Props<T> {
  control: ListControl<T>
  sortBy: string
  setSortBy: SetState<string>
  sortOrder: "ascending" | "descending"
  setSortOrder: SetState<"ascending" | "descending">
}

export const ListControlsSortButton = <T,>(props: Props<T>) => {
  const { control, sortBy, setSortBy, sortOrder, setSortOrder } = props

  const isActive = control.key === sortBy

  const handleClick = () => {
    setSortBy(control.key)
    setSortOrder((prev) => (prev === "descending" ? "ascending" : "descending"))
  }

  const sortIcon = (): IconProp | undefined => {
    if (!isActive) return undefined
    if (sortOrder === "ascending") return "arrow-down"
    return "arrow-up"
  }

  return (
    <Button
      label={control.label}
      iconRight={sortIcon()}
      onClick={handleClick}
      className={classes(styles.button, isActive && styles.buttonActive)}
      key={control.key}
    />
  )
}
