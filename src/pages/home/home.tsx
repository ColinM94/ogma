import * as React from "react"

import { getCardsSnapshot } from "services/getFlashCardsSnapshot"
import { List } from "components/list/list"
import { FlashCard } from "types/flashCard"
import { Card } from "components/card/card"

import styles from "./styles.module.scss"

export const Home = () => {
  const [data, setData] = React.useState<FlashCard[]>([])

  React.useEffect(() => {
    const loadData = async () => {
      const unsubscribe = await getCardsSnapshot(setData)

      return () => {
        unsubscribe()
      }
    }

    loadData()
  }, [])

  return (
    <List
      items={data}
      renderItem={({ item }) => (
        <Card key={item.id} className={styles.listItem}>
          <div>{item.id}</div>
          <div>{item.front}</div>
          <div>{item.back}</div>
        </Card>
      )}
      className={styles.list}
    />
  )
}
