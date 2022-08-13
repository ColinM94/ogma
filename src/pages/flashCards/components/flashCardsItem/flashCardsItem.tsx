import { Button } from "components/button/button"
import { Card } from "components/card/card"
import { deleteFlashcard } from "services"
import { FlashCard } from "types"

import styles from "./styles.module.scss"

interface FlashCardItemProps {
  item: FlashCard
  onClick: () => void
}

export const FlashCardsItem = ({ item, onClick }: FlashCardItemProps) => {
  const handleDelete = (id: string, e: React.MouseEvent) => {
    try {
      e.stopPropagation()
      const isConfirmed = confirm("Are you sure?")
      isConfirmed && deleteFlashcard(id)
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
        onClick={(e) => handleDelete(item.id, e)}
        className={styles.deleteBtn}
      />
    </Card>
  )
}
