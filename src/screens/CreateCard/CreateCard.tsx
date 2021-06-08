import * as React from "react"
import { StyleSheet, View } from "react-native"
import { useToast } from "contexts/ToastContext"
import { useTheme } from "contexts/ThemeContext"
import { Input } from "library/Input"
import { ScreenContainer } from "library/ScreenContainer"
import { Button } from "library/Button"
import { Header } from "library/Header"
import { IconButton } from "library/IconButton"
import { useNavigation } from "@react-navigation/native"

export const CreateCard = () => {
    const { toast } = useToast()
    const { theme } = useTheme()
    const navigation = useNavigation()

    const [frontTitle, setFrontTitle] = React.useState("")
    const [frontSubtitle, setFrontSubtitle] = React.useState("")
    const [backTitle, setBackTitle] = React.useState("")
    const [backSubtitle, setBackSubtitle] = React.useState("")
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
            <Header>
                <IconButton icon="arrow-left" onPress={() => navigation.goBack()} />
            </Header>
            <View style={styles.container}>
                <Input value={frontTitle} setValue={setFrontTitle} label="Front Title" />
                <Input
                    value={frontSubtitle}
                    setValue={setFrontSubtitle}
                    label="Front Subtitle"
                />
                <Input value={backTitle} setValue={setBackTitle} label="Back Title" />
                <Input
                    value={backSubtitle}
                    setValue={setBackSubtitle}
                    label="Front Title"
                />
                <Input value={category} setValue={setCategory} label="Category" />

                <Button title="Create Card" onPress={handleSubmit} />
            </View>
        </>
    )
}
