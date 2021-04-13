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
    const [frontTitle, setFrontTitle] = React.useState("")
    const [frontSubtitle, setFrontSubtitle] = React.useState("")
    const [backTitle, setBackTitle] = React.useState("")
    const [backSubtitle, setBackSubtitle] = React.useState("")
    const [category, setCategory] = React.useState("")

    const { showToast } = useToast()
    const { theme } = useTheme()

    const handleAdd = async () => {
        if (frontTitle === "") {
            showToast("Please enter a front title.")
            return
        } else if (backTitle === "") {
            showToast("Plese enter a back title.")
        }

        try {
            await addCard(frontTitle, frontSubtitle, backTitle, backSubtitle, category)
            resetForm()
            showToast("Card Created")
        } catch (error) {
            alert(error.message)
        }
    }

    const resetForm = () => {
        setFrontTitle("")
        setFrontSubtitle("")
        setBackTitle("")
        setBackSubtitle("")
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
            <Input label="Title" value={frontTitle} setValue={setFrontTitle} />
            <Input label="Subtitle" value={frontSubtitle} setValue={setFrontSubtitle} />

            <Text subtitle style={styles.sectionTitle}>Back</Text>
            <Input label="Title" value={backTitle} setValue={setBackTitle} />
            <Input label="Subtitle" value={backSubtitle} setValue={setBackSubtitle} />

            <Text subtitle style={styles.sectionTitle}>General</Text>
            <Input label="Category" value={category} setValue={setCategory} />

            <Button title="Create Card" onPress={handleAdd} />
        </ScreenView>
    )
}