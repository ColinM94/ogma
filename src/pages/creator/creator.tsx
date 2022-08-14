import * as React from "react"
import { useNavigate } from "react-router-dom"

import { addFlashcard } from "services"
import { InputText } from "components/inputText/inputText"
import { Card } from "components/card/card"

import styles from "./styles.module.scss"
import { Button } from "components/button/button"

export const Creator = () => {
  const navigate = useNavigate()

  const [front, setFront] = React.useState("")
  const [back, setBack] = React.useState("")

  const handleAddClick = () => {
    try {
      if (front === "" && back === "") return

      addFlashcard({ front, back })
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

      <Button label="Save" onClick={handleAddClick} />
    </>
  )
}
