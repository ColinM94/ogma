import * as React from "react"
import { ClassName } from "types/general"
import { ListControls } from "./components/listControls/listControls"

interface ListProps {
  items: any[]
  renderItem: ({ item }: any) => JSX.Element
  className?: ClassName
}

export const List = ({ items, renderItem, className }: ListProps) => {
  const [filteredItems, setFilteredItems] = React.useState(items)

  React.useEffect(() => {
    setFilteredItems(items)
  }, [items])

  return (
    <div className={className}>
      <ListControls
        items={items}
        setFilteredItems={setFilteredItems}
        searchBy="front"
      />
      {filteredItems.map((item) => renderItem({ item }))}
    </div>
  )
}
