import * as React from "react"
import { useLocation } from "react-router-dom"

import { FlashCardInfo } from "types"
import { Card } from "components"
import { MainLayout } from "layouts"
import { getDocument } from "services"

import styles from "./styles.module.scss"
import { getPath } from "utils"

export const FlashcardPage = () => {
  const { pathname } = useLocation()

  const [flashCard, setFlashCard] = React.useState<FlashCardInfo>({
    front: "",
    back: "",
    id: "",
  })

  React.useEffect(() => {
    const loadData = async () => {
      const id = getPath(pathname)
      const _flashCard = await getDocument<FlashCardInfo>("cards", id)
      setFlashCard(_flashCard)
    }

    loadData()
  }, [])

  return (
    <MainLayout showBackButton label={flashCard.id}>
      <Card className={styles.container}>
        <div className={styles.front}>{flashCard.front}</div>
        <div className={styles.divider} />
        <div className={styles.back}>{flashCard.back}</div>
      </Card>
    </MainLayout>
  )
}
