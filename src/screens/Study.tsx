import * as React from "react"
import { StyleSheet, View } from "react-native"
import { ScreenView } from "library/ScreenView"
import { Button } from "library/Button"
import { useTheme } from "contexts/ThemeContext"
import { StudyProps } from "navigation/types"
import { FlashCard } from "components/FlashCard"

export const Study = ({ navigation, route }: StudyProps) => {
    const { theme } = useTheme()

    const styles = StyleSheet.create({
        card: {
            flex: 1,
            marginBottom: theme.spacing.primary
        },
        correctBtn: {
            flex: 1,
            backgroundColor: "green",
            marginLeft: theme.spacing.secondary
        },
        incorrectBtn: {
            flex: 1,
            backgroundColor: "red",
            marginRight: theme.spacing.secondary,
        }
    })

    const handleIncorrect = () => {

    }

    const handleCorrect = () => {

    }

    return (
        <ScreenView>
            {/*            <FlashCard /> */}
            <View style={{ flexDirection: "row" }}>
                <Button title="Incorrect" style={styles.incorrectBtn} onPress={handleIncorrect} />
                <Button title="Correct" style={styles.correctBtn} onPress={handleCorrect} />
            </View>
        </ScreenView>
    )
}