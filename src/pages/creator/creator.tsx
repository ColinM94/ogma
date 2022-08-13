import * as React from "react"
import { useNavigate } from "react-router-dom"

import { addFlashCard } from "services"
import { InputText } from "components/inputText/inputText"
import { Button } from "components/button/button"
import { Card } from "components/card/card"

import styles from "./styles.module.scss"

export const Creator = () => {
  const navigate = useNavigate()

  const [front, setFront] = React.useState("")
  const [back, setBack] = React.useState("")

  const handleAddClick = () => {
    try {
      addFlashCard({ front, back })
      navigate("/flashcards")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Card className={styles.card}>
        <InputText placeholder="Front" value={front} setValue={setFront} />
        <InputText placeholder="Back" value={back} setValue={setBack} />
      </Card>

      <Button label="Add" onClick={handleAddClick} />
    </>
  )
}
