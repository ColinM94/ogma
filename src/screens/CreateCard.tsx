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
import { FlashCardData } from "common/types"
import { Card } from "library/Card"
import { Formik } from "formik"
import { TextInput } from "react-native-paper"

export const CreateCard = () => {
    const [frontTitle, setFrontTitle] = React.useState("")
    const [frontSubtitle, setFrontSubtitle] = React.useState("")
    const [backTitle, setBackTitle] = React.useState("")
    const [backSubtitle, setBackSubtitle] = React.useState("")
    const [category, setCategory] = React.useState("")

    const { showToast } = useToast()
    const { theme } = useTheme()

    const handleSubmit = async (values) => {
        if (frontTitle === "") {
            showToast("Please enter a front title.")
            return
        } else if (backTitle === "") {
            showToast("Plese enter a back title.")
        }

        try {
            const flashCard: FlashCardData = {
                front: {
                    title: frontTitle,
                    subtitle: frontSubtitle,
                },
                back:
                {
                    title: backTitle,
                    subtitle: backSubtitle
                },
                category: category,
                dateCreated: new Date()
            }

            await addCard(flashCard)
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
            <Formik
                initialValues={{ frontTitle: "", frontSubtitle: "", backTitle: "", backSubtitle: "", category: "" }}
                onSubmit={values => handleSubmit(values)}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <Card>
                        <Input
                            label="Front Title"
                            onChangeText={handleChange('frontTitle')}
                            onBlur={() => handleBlur('title')}
                            value={values.frontTitle}
                        />
                        <Input
                            label="Front Subtitle"
                            onChangeText={handleChange('frontSubtitle')}
                            onBlur={() => handleBlur('frontSubtitle')}
                            value={values.frontSubtitle}
                        />
                        <Input
                            label="Back Title"
                            onChangeText={handleChange('backTitle')}
                            onBlur={() => handleBlur('backTitle')}
                            value={values.backTitle}
                        />
                        <Input
                            label="Back Subtitle"
                            onChangeText={handleChange('backSubtitle')}
                            onBlur={() => handleBlur('backSubtitle')}
                            value={values.backSubtitle}
                        />
                        <Input
                            label="Category"
                            onChangeText={handleChange('category')}
                            onBlur={() => handleBlur('category')}
                            value={values.category}
                        />
                        <Button title="Create Card" onPress={handleSubmit} />
                    </Card>
                )}
            </Formik>
        </ScreenView>
    )
}