import * as React from "react"
import { ScreenView } from "library/ScreenView"
import { Input } from "library/Input"
import { addCard } from "api/database"
import { Button } from "library/Button"
import { useToast } from "contexts/ToastContext"

export const CreateCard = () => {
    const [english, setEnglish] = React.useState("")
    const [german, setGerman] = React.useState("")
    const [category, setCategory] = React.useState("")

    const { showToast } = useToast()

    const handleAdd = async () => {
        if (english === "") {
            showToast("Please enter English word.")
            return
        } else if (german === "") {
            showToast("Plese enter German word.")
        }

        try {
            let card: FlashCard = { english, german, dateCreated: new Date(), category }
            await addCard(card)
            resetForm()
            showToast("Card Created")
        } catch (error) {
            alert(error.message)
        }
    }

    const resetForm = () => {
        setEnglish("")
        setGerman("")
        setCategory("")
    }

    return (
        <ScreenView>
            <Input label="English" value={english} setValue={setEnglish} />
            <Input label="German" value={german} setValue={setGerman} />
            <Input label="Category" value={category} setValue={setCategory} />
            <Button title="Create Card" onPress={handleAdd} />
        </ScreenView>
    )
}