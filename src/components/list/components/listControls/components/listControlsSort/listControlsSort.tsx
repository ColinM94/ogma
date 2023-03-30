import { ListControl } from "components/list/types"
import { SetState } from "types"
import { classes } from "utils"

import { ListControlsSortButton } from "./components/listControlsSortButton/listControlsSortButton"
import styles from "./styles.module.scss"

interface Props<T> {
  controls?: ListControl<T>[]
  sortBy: string
  setSortBy: SetState<string>
  sortOrder: "ascending" | "descending"
  setSortOrder: SetState<"ascending" | "descending">
  className?: string
}

export const ListControlsSort = <T,>(props: Props<T>) => {
  const { controls, sortBy, setSortBy, sortOrder, setSortOrder, className } =
    props

  return (
    <div className={classes(styles.container, className)}>
      {controls?.map((control) => (
        <ListControlsSortButton
          control={control}
          sortBy={sortBy}
          setSortBy={setSortBy}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
          key={String(control.key)}
        />
      ))}
    </div>
  )
}
