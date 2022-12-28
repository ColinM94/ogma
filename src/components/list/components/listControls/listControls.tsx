import * as React from "react"

import { ListProps } from "components"
import { classes, normaliseString } from "utils"
import { SetState } from "types"
import { ListControl, ListItem } from "components/list/types"

import { ListControlsSearch } from "./components/listControlsSearch/listControlsSearch"
import { ListControlsFilter } from "./components/listControlsFilter/listControlsFilter"
import { ListControlsSort } from "./components/listControlsSort/listControlsSort"

import styles from "./styles.module.scss"

interface Props<T> {
  items: ListProps<T>["items"]
  setFilteredItems: SetState<ListProps<T>["items"]>
  controls?: ListControl<T>[]
}

export const ListControls = <T,>(props: Props<T>) => {
  const { items, controls, setFilteredItems } = props

  const [search, setSearch] = React.useState("")
  const [sortBy, setSortBy] = React.useState("front")
  const [sortOrder, setSortOrder] = React.useState<"ascending" | "descending">(
    "descending"
  )
  const [showFilters, setShowFilters] = React.useState(false)

  React.useEffect(() => {
    const searchKeys: string[] = []

    if (!controls) return

    controls.forEach((control) => {
      const { key, search } = control

      if (search) searchKeys.push(String(key))
    })

    let filteredItems: ListItem<T>[] = []

    if (search) {
      items.forEach((item, index1) => {
        searchKeys.some((searchKey, index2) => {
          const _item = item as any

          if (normaliseString(_item[searchKey]).includes(search)) {
            filteredItems.push(item)
            return true
          }
        })
      })
    } else {
      filteredItems = [...items]
    }

    filteredItems.sort((a, b) => {
      const comparison = normaliseString(a[sortBy]).localeCompare(
        normaliseString(b[sortBy])
      )
      return sortOrder === "ascending" ? comparison : -comparison
    })

    setFilteredItems(filteredItems)
  }, [search, items, sortBy, sortOrder, setFilteredItems])

  return (
    <div className={classes(styles.row, styles.container)}>
      <div className={styles.row}>
        <ListControlsSearch
          search={search}
          setSearch={setSearch}
          className={styles.search}
        />
        <ListControlsFilter show={showFilters} setShow={setShowFilters} />
      </div>
      {showFilters && (
        <ListControlsSort
          controls={controls}
          sortBy={sortBy}
          setSortBy={setSortBy}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
        />
      )}
    </div>
  )
}
