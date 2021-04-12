import * as React from "react"
import { StyleSheet } from "react-native"
import { addCard } from "api/database"
import { useToast } from "contexts/ToastContext"
import { useTheme } from "contexts/ThemeContext"
import { ScreenView } from "library/ScreenView"
import { Input } from "library/Input"
import { Button } from "library/Button"
import { Text } from "library/Text"

export const CreateCard = () => {
    const [english, setEnglish] = React.useState("")
    const [german, setGerman] = React.useState("")
    const [category, setCategory] = React.useState("")

    const { showToast } = useToast()
    const { theme } = useTheme()

    const handleAdd = async () => {
        if (english === "") {
            showToast("Please enter English word.")
            return
        } else if (german === "") {
            showToast("Plese enter German word.")
        }

        try {
            let card: FlashCardData = { english, german, dateCreated: new Date(), category }
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

    const styles = StyleSheet.create({
        sectionTitle: {
            marginBottom: theme.spacing.tertiary
        },
    })

    return (
        <ScreenView>
            <Text subtitle style={styles.sectionTitle}>Front</Text>
            <Input label="Title" value={english} setValue={setEnglish} />
            <Input label="Subtitle" value={german} setValue={setGerman} />

            <Text subtitle style={styles.sectionTitle}>Back</Text>
            <Input label="Title" value={category} setValue={setCategory} />
            <Input label="Subtitle" value={category} setValue={setCategory} />
            <Button title="Create Card" onPress={handleAdd} />
        </ScreenView>
    )
}