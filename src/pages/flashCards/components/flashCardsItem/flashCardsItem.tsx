import { Button } from "components/button/button"
import { Card } from "components/card/card"
import { deleteFlashCard } from "services"
import { FlashCard } from "types"

import styles from "./styles.module.scss"

interface FlashCardItemProps {
  item: FlashCard
  onClick: () => void
}

export const FlashCardsItem = ({ item, onClick }: FlashCardItemProps) => {
  const handleDelete = (id: string) => {
    try {
      const isConfirmed = confirm("Are you sure?")
      isConfirmed && deleteFlashCard(id)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Card key={item.id} className={styles.container} onClick={onClick}>
      <div className={styles.info}>
        <div className={styles.front}>{item.front}</div>
        <div className={styles.back}>{item.back}</div>
      </div>
      <Button
        icon="trash"
        onClick={() => handleDelete(item.id)}
        className={styles.deleteBtn}
      />
    </Card>
  )
}
