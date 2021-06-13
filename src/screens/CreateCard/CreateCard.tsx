import * as React from "react"
import { StyleSheet, ScrollView } from "react-native"
import { useToast } from "contexts/ToastContext"
import { useTheme } from "contexts/ThemeContext"
import { Button } from "library/Button"
import { Header } from "library/Header"
import { useNavigation } from "@react-navigation/native"
import { CreateCardInput } from "./CreateCardInput"
import { addCard } from "api/firestore"
import { FlashCardData } from "common/types"
import { useAuth } from "contexts/AuthContext"

export const CreateCard = () => {
    const { toast } = useToast()
    const { theme } = useTheme()
    const { currentUser } = useAuth()
    const navigation = useNavigation()

    const [frontLine1, setFrontLine1] = React.useState("")
    const [frontLine2, setFrontLine2] = React.useState("")
    const [frontNotes, setFrontNotes] = React.useState("")
    const [backLine1, setBackLine1] = React.useState("")
    const [backLine2, setBackLine2] = React.useState("")
    const [backNotes, setBackNotes] = React.useState("")
    const [category, setCategory] = React.useState("")

    const handleSubmit = async () => {
        const flashCardData: FlashCardData = {
            front: {
                line1: {
                    text: frontLine1,
                },
                line2: {
                    text: frontLine2,
                },
                notes: {
                    text: frontNotes,
                },
            },
            back: {
                line1: {
                    text: backLine1,
                },
                line2: {
                    text: backLine2,
                },
                notes: {
                    text: backNotes,
                },
            },
            dateCreated: new Date(),
            category: category,
        }

        try {
            addCard(flashCardData, currentUser.id!)
            toast("Card created")
            navigation.goBack()
        } catch (err) {
            toast(err.message)
        }
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
                    label="English"
                />
                {/*                 <CreateCardInput
                    value={frontLine2}
                    setValue={setFrontLine2}
                    label="2nd English Word"
                /> */}

                <CreateCardInput
                    value={backLine1}
                    setValue={setBackLine1}
                    label="German"
                />
                <CreateCardInput
                    value={backLine2}
                    setValue={setBackLine2}
                    label="German 2"
                />
                <CreateCardInput
                    value={frontNotes}
                    setValue={setFrontNotes}
                    label="English Example"
                />
                <CreateCardInput
                    value={backNotes}
                    setValue={setBackNotes}
                    label="German Example"
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
