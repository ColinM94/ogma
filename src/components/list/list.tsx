import * as React from "react"
import { ClassName } from "types/general"
import { ListControls } from "./components/listControls/listControls"

interface ListProps<T> {
  items: T[]
  renderItem: ({ item }: { item: T }) => JSX.Element
  searchBy: keyof T
  className?: ClassName
}

export const List = <T,>(props: ListProps<T>) => {
  const { items, renderItem, searchBy, className } = props

  const [filteredItems, setFilteredItems] = React.useState(items)

  React.useEffect(() => {
    setFilteredItems(items)
  }, [items])

  return (
    <div className={className}>
      <ListControls
        items={items}
        setFilteredItems={setFilteredItems}
        searchBy={searchBy}
      />
      {filteredItems.map((item) => renderItem({ item }))}
    </div>
  )
}
