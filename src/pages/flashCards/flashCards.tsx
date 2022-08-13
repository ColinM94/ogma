import * as React from "react"
// import { useNavigate } from "react-router-dom"

import { FlashCard } from "types/flashCard"
import { getCardsSnapshot } from "services"
import { List } from "components/list/list"

import { FlashCardsItem } from "./components/flashCardsItem/flashCardsItem"
import styles from "./styles.module.scss"
import { useNavigate } from "react-router-dom"

export const FlashCards = () => {
  const navigate = useNavigate()

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

  const handleClick = (route: string) => {
    navigate(route)
  }

  return (
    <>
      <List
        items={data}
        renderItem={({ item }) => (
          <FlashCardsItem item={item} onClick={() => handleClick(item.id)} />
        )}
        className={styles.list}
      />
    </>
  )
}
