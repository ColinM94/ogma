import * as React from "react"

import { InputText } from "components"
import { FlashCard, SetState } from "types"

import styles from "./styles.module.scss"

interface ListControlsProps {
  items: FlashCard[]
  setFilteredItems: SetState<FlashCard[]>
  searchBy: keyof FlashCard
}

export const ListControls = (props: ListControlsProps) => {
  const { items, setFilteredItems, searchBy = "id" } = props

  const [search, setSearch] = React.useState("")

  React.useEffect(() => {
    try {
      if (search === "") {
        setFilteredItems(items)
        return
      }

      const _filteredItems = items.filter((item) =>
        item[searchBy]
          .toLowerCase()
          .trim()
          .includes(search?.toLowerCase().trim() || "")
      )

      setFilteredItems(_filteredItems)
    } catch (error) {
      console.log(error)
    }
  }, [search])

  return (
    <div className={styles.container}>
      <InputText
        value={search}
        setValue={setSearch}
        className={styles.searchInputContainer}
        inputClassName={styles.searchInput}
        type="text"
        placeholder="Search..."
        icon="magnifying-glass"
      />
    </div>
  )
}
