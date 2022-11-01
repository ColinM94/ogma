import * as React from "react"
import { useNavigate } from "react-router-dom"

import { Button, List } from "components"
import { FlashCard } from "types/flashCard"
import { getFlashcardsSnapshot } from "services"

import { FlashCardsItem } from "./components/flashCardsItem/flashcardsItem"
import styles from "./styles.module.scss"

export const FlashcardsPage = () => {
  const navigate = useNavigate()

  const [data, setData] = React.useState<FlashCard[]>([])

  React.useEffect(() => {
    const loadData = async () => {
      try {
        const unsubscribe = await getFlashcardsSnapshot(setData)

        return () => {
          unsubscribe()
        }
      } catch (error) {
        console.log(error)
      }
    }

    loadData()
  }, [])

  const handleItemClick = (route: string) => {
    navigate(route)
  }

  const handleAddClick = () => {
    navigate("/creator")
  }

  return (
    <>
      <List
        items={data}
        renderItem={({ item }) => (
          <FlashCardsItem
            item={item}
            onClick={() => handleItemClick(item.id)}
            key={item.id}
            className={styles.listItem}
          />
        )}
        className={styles.list}
      />
      <Button icon="plus" type="floating" onClick={handleAddClick} />
    </>
  )
}
