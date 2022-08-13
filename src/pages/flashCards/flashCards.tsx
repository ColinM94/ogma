import * as React from "react"
import { useNavigate } from "react-router-dom"

import { FlashCard } from "types/flashCard"
import { getCardsSnapshot } from "services"
import { List } from "components/list/list"

import { FlashCardsItem } from "./components/flashCardsItem/flashCardsItem"
import styles from "./styles.module.scss"

export const FlashCards = () => {
  const [data, setData] = React.useState<FlashCard[]>([])

  const navigate = useNavigate()

  React.useEffect(() => {
    const loadData = async () => {
      const unsubscribe = await getCardsSnapshot(setData)

      return () => {
        unsubscribe()
      }
    }

    loadData()
  }, [])

  // const handleAdd = () => {
  //   navigate("/creator")
  // }

  return (
    <>
      <List
        items={data}
        renderItem={({ item }) => <FlashCardsItem item={item} />}
        className={styles.list}
      />
      {/* <FAB label="+" onClick={handleAdd} /> */}
    </>
  )
}
