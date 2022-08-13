import * as React from "react"
import { useLocation } from "react-router-dom"

import { getCurrentRoute } from "utils/getCurrentRoute"
import { FlashCard } from "types"
import { Card } from "components/card/card"
import { getFlashcard } from "services"

import styles from "./styles.module.scss"

export const FlashCardDetails = () => {
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
    <Card className={styles.container}>
      <div className={styles.front}>{flashCard.front}</div>
      <div className={styles.divider} />
      <div className={styles.back}>{flashCard.back}</div>
    </Card>
  )
}
