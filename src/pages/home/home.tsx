import * as React from "react"

import { getCardsSnapshot } from "services/getFlashCardsSnapshot"
import { List } from "components/list/list"
import { FlashCard } from "types/flashCard"
import { Card } from "components/card/card"
import { Button } from "components/button/button"

import styles from "./styles.module.scss"
import { addFlashCard, deleteFlashCard } from "services"
import { FAB } from "components/fab/fab"

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

  const handleAdd = () => {
    try {
      addFlashCard({ front: "Colin", back: "Was here" })
    } catch (error) {
      console.log(error)
    }
  }

  const handleDelete = (id: string) => {
    try {
      deleteFlashCard(id)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <List
        items={data}
        renderItem={({ item }) => (
          <Card key={item.id} className={styles.listItem}>
            <div>{item.id}</div>
            <div>{item.front}</div>
            <div>{item.back}</div>
            <Button label="Delete" onClick={() => handleDelete(item.id)} />
          </Card>
        )}
        className={styles.list}
      />
      <FAB label="+" onClick={handleAdd} />
    </>
  )
}
