import * as React from 'react'

import { classes } from 'utils'

import { ListControls } from './components/listControls/listControls'

import { ListControl, ListItem } from './types'
import styles from './styles.module.scss'

export interface ListProps<T> {
  items: ListItem<T>[]
  renderItem: ({ item }: { item: T }) => JSX.Element
  controls?: ListControl<T>[]
  className?: string
}

export const List = <T,>(props: ListProps<T>) => {
  const { items, renderItem, controls, className } = props

  const [filteredItems, setFilteredItems] = React.useState<T[]>([])

  return (
    <div className={classes(styles.container, className)}>
      <ListControls items={items} setFilteredItems={setFilteredItems} controls={controls} />

      {filteredItems.map((item) => renderItem({ item }))}
    </div>
  )
}
