import * as React from "react"
import { StyleSheet, ScrollView } from "react-native"
import { useToast } from "contexts/ToastContext"
import { useTheme } from "contexts/ThemeContext"
import { Button } from "library/Button"
import { Header } from "library/Header"
import { useNavigation } from "@react-navigation/native"
import { CreateCardInput } from "./CreateCardInput"

export const CreateCard = () => {
    const { toast } = useToast()
    const { theme } = useTheme()
    const navigation = useNavigation()

    const [frontLine1, setFrontLine1] = React.useState("")
    const [frontLine2, setFrontLine2] = React.useState("")
    const [backLine1, setBackLine1] = React.useState("")
    const [backLine2, setBackLine2] = React.useState("")
    const [category, setCategory] = React.useState("")

    const handleSubmit = () => {
        toast("Submitted")
    }

    const styles = StyleSheet.create({
        container: {
            padding: theme.spacing.primary,
        },
    })

    return (
        <>
            <Header
                leftBtnIcon="arrow-left"
                leftBtnOnPress={() => navigation.goBack()}
                title="Create Card"
            />
            <ScrollView contentContainerStyle={styles.container}>
                <CreateCardInput
                    value={frontLine1}
                    setValue={setFrontLine1}
                    label="Front Line 1"
                />
                <CreateCardInput
                    value={frontLine2}
                    setValue={setFrontLine2}
                    label="Front Line 2"
                />
                <CreateCardInput
                    value={backLine1}
                    setValue={setBackLine1}
                    label="Back Line 1"
                />
                <CreateCardInput
                    value={backLine2}
                    setValue={setBackLine2}
                    label="Back Line 2"
                />
                <CreateCardInput
                    value={category}
                    setValue={setCategory}
                    label="Category"
                    enableAttachBtn={false}
                />

                <Button title="Create Card" onPress={handleSubmit} />
            </ScrollView>
        </>
    )
}
