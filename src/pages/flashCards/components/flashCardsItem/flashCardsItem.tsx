import { Button } from "components/button/button"
import { Card } from "components/card/card"
import { deleteFlashCard } from "services"
import { FlashCard } from "types"

import styles from "./styles.module.scss"

interface FlashCardItemProps {
  item: FlashCard
}

export const FlashCardsItem = ({ item }: FlashCardItemProps) => {
  const handleDelete = (id: string) => {
    try {
      deleteFlashCard(id)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Card key={item.id} className={styles.container}>
      <div>{item.id}</div>
      <div>{item.front}</div>
      <div>{item.back}</div>
      <Button label="Delete" onClick={() => handleDelete(item.id)} />
    </Card>
  )
}
