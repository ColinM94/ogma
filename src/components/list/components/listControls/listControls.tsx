import * as React from "react"

import { InputText } from "components"
import { FlashCard, SetState } from "types"

import styles from "./styles.module.scss"

interface ListControlsProps<T> {
  items: T[]
  setFilteredItems: SetState<T[]>
  searchBy?: keyof T
}

export const ListControls = <T,>(props: ListControlsProps<T>) => {
  const { items, setFilteredItems, searchBy } = props

  const [search, setSearch] = React.useState("")

  const updateSearch = (searchValue: string) => {
    setSearch(searchValue)

    if (!searchValue) {
      setFilteredItems(items)
      return
    }

    const _filteredItems = items.filter((item) => {
      if (!searchBy) return false

      return String(item[searchBy])
        .toLowerCase()
        .trim()
        .includes(search?.toLowerCase().trim() || "")
    })

    setFilteredItems(_filteredItems)
  }

  return (
    <div className={styles.container}>
      <InputText
        value={search}
        setValue={updateSearch}
        className={styles.searchInputContainer}
        inputClassName={styles.searchInput}
        type="text"
        placeholder="Search..."
        icon="magnifying-glass"
      />
    </div>
  )
}
