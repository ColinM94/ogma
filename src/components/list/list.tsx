import { ClassName } from "types/general"

interface ListProps {
  items: any[]
  renderItem: ({ item }: any) => JSX.Element
  className?: ClassName
}

export const List = ({ items, renderItem, className }: ListProps) => {
  return (
    <div className={className}>{items.map((item) => renderItem({ item }))}</div>
  )
}

const testCoomiiti = "hello2"
