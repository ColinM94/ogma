import * as React from "react"
import { useNavigate } from "react-router-dom"

import { List } from "components"
import { FlashCard } from "types/flashCard"
import { getFlashcardsSnapshot } from "services"

import { FlashCardsItem } from "./components/flashCardsItem/flashCardsItem"
import styles from "./styles.module.scss"

export const Flashcards = () => {
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

  const handleClick = (route: string) => {
    navigate(route)
  }

  return (
    <>
      <List
        items={data}
        renderItem={({ item }) => (
          <FlashCardsItem
            item={item}
            onClick={() => handleClick(item.id)}
            key={item.id}
          />
        )}
        className={styles.list}
      />
    </>
  )
}
