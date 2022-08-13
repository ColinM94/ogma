import * as React from "react"
import { useLocation } from "react-router-dom"

import { getCurrentRoute } from "utils/getCurrentRoute"
import { FlashCard } from "types"
import { getFlashCard } from "services"
import { Card } from "components/card/card"

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
      const _flashCard = await getFlashCard(id)
      setFlashCard(_flashCard)
    }

    loadData()
  }, [])

  return (
    <Card className={styles.container}>
      {flashCard.front}
      {flashCard.back}
    </Card>
  )
}
