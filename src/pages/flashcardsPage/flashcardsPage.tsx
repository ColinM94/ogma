import * as React from "react"
import { useNavigate } from "react-router-dom"

import { FloatingActionButton, List } from "components"
import { MainLayout } from "layouts"
import { FlashCardInfo } from "types"
import { getDocumentsSnapshot } from "services"

import { FlashCardsItem } from "./components/flashCardsItem/flashcardsItem"
import styles from "./styles.module.scss"

export const FlashcardsPage = () => {
  const navigate = useNavigate()

  const [flashCards, setFlashCards] = React.useState<FlashCardInfo[]>([])

  const updateData = (data: FlashCardInfo[]) => {
    setFlashCards(data)
  }

  React.useEffect(() => {
    try {
      const unsubscribe = getDocumentsSnapshot("cards", updateData)
      return () => unsubscribe()
    } catch (error) {
      console.log(error)
    }
  }, [])

  const handleItemClick = (route: string) => {
    navigate(route)
  }

  const handleAddClick = () => {
    navigate("/creator")
  }

  return (
    <MainLayout showNavbar label="My Flaschards">
      <List
        items={flashCards}
        controls={[
          {
            key: "front",
            label: "English",
            sort: true,
            filter: true,
            search: true,
          },
          {
            key: "back",
            label: "German",
            sort: true,
            filter: true,
            search: true,
          },
        ]}
        renderItem={({ item }) => (
          <FlashCardsItem
            item={item}
            onClick={() => handleItemClick(item.id)}
            className={styles.listItem}
            key={item.id}
          />
        )}
        className={styles.list}
      />
      <FloatingActionButton icon="plus" onClick={handleAddClick} />
    </MainLayout>
  )
}
