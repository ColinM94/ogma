import { InputText } from "components"
import { classes } from "utils"
import { SetState } from "types"

import styles from "./styles.module.scss"

interface Props {
  search: string
  setSearch: SetState<string>
  className?: string
}

export const ListControlsSearch = (props: Props) => {
  const { search, setSearch, className } = props

  const updateSearch = (searchValue: string) => {
    setSearch(searchValue.toLowerCase())
  }

  return (
    <InputText
      value={search}
      setValue={updateSearch}
      className={classes(styles.container, className)}
      inputClassName={styles.input}
      type="text"
      placeholder="Search..."
      icon="magnifying-glass"
    />
  )
}
