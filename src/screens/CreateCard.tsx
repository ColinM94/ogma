import * as React from "react"
import { StyleSheet, View } from "react-native"
import { addCard } from "api/database"
import { useToast } from "contexts/ToastContext"
import { useTheme } from "contexts/ThemeContext"
import { ScreenView } from "library/ScreenView"
import { Input } from "library/Input"
import { Button } from "library/Button"
import { Text } from "library/Text"
import { SectionTitle } from "library/SectionTitle"
import { Divider } from "library/Divider"

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
            marginBottom: theme.spacing.primary
        },
    })

    return (
        <ScreenView>
            <SectionTitle title="Front" />
            <Input placeholder="Title" value={frontTitle} setValue={setFrontTitle} />
            <Input placeholder="Subtitle" value={frontSubtitle} setValue={setFrontSubtitle} />

            <SectionTitle title="Back" />
            <Input placeholder="Title" value={backTitle} setValue={setBackTitle} />
            <Input placeholder="Subtitle" value={backSubtitle} setValue={setBackSubtitle} />

            <SectionTitle title="General" />
            <Input placeholder="Category" value={category} setValue={setCategory} />

            <Button title="Create Card" onPress={handleAdd} style={{ marginTop: "auto" }} />
        </ScreenView>
    )
}