import * as React from "react"

import { Button, FlashCard } from "components"
import { MainLayout } from "layouts"
import { FlashCardInfo } from "types"
import { getDocuments } from "services"

import styles from "./styles.module.scss"

export const StudyPage = () => {
  const [flashCards, setFlashCards] = React.useState<FlashCardInfo[]>([])

  const loadData = async () => {
    try {
      const cards = await getDocuments<FlashCardInfo>({
        collection: "cards",
      })

      setFlashCards(cards)
    } catch (error) {
      console.log(error)
    }
  }

  React.useEffect(() => {
    loadData()
  }, [])

  return (
    <MainLayout showBackButton showHeader>
      <div className={styles.flashCards}>
        {flashCards.map((flashCard) => (
          <FlashCard
            info={flashCard}
            key={flashCard.id}
            className={styles.flashCard}
          />
        ))}
      </div>

      <div className={styles.buttons}>
        <Button label="No" className={styles.noButton} />
        <Button label="Yes" className={styles.yesButton} />
      </div>
    </MainLayout>
  )
}
