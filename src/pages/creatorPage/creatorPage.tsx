import * as React from "react"
import { useNavigate } from "react-router-dom"

import { Button, Card, InputText } from "components"
import { MainLayout } from "layouts"
import { addDocument } from "services"

import styles from "./styles.module.scss"

export const CreatorPage = () => {
  const navigate = useNavigate()

  const [front, setFront] = React.useState("")
  const [back, setBack] = React.useState("")

  const handleAddClick = () => {
    try {
      if (front === "" && back === "") return

      addDocument("cards", { front, back })
      navigate("/flashcards")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <MainLayout
      showHeader
      showBackButton
      showSettingsButton
      label="Create Flash Card"
    >
      <Card className={styles.card}>
        <InputText placeholder="Front" value={front} setValue={setFront} />
        <InputText placeholder="Back" value={back} setValue={setBack} />
      </Card>

      <Button label="Save" onClick={handleAddClick} />
    </MainLayout>
  )
}
