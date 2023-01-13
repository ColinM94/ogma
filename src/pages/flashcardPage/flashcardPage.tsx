import * as React from "react"
import { useLocation } from "react-router-dom"

import { Card } from "components"
import { getCurrentRoute } from "utils"
import { FlashCard } from "types"
import { getFlashcard } from "services"

import styles from "./styles.module.scss"
import { MainLayout } from "layouts"

export const FlashcardPage = () => {
  const { pathname } = useLocation()

  const [flashCard, setFlashCard] = React.useState<FlashCard>({
    front: "",
    back: "",
    id: "",
  })

  React.useEffect(() => {
    const loadData = async () => {
      const id = getCurrentRoute(pathname)
      const _flashCard = await getFlashcard(id)
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
