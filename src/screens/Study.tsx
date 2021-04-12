import * as React from "react"
import { StyleSheet, View } from "react-native"

import { Card } from "components/Card"
import { ScreenView } from "components/ScreenView"
import { Button } from "components/Button"
import { Text } from "components/Text"
import { useTheme } from "contexts/ThemeContext"
import { StudyProps } from "navigation/types"

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
            <Card style={styles.card}>
                <Text>Home</Text>
            </Card>
            <View style={{ flexDirection: "row" }}>
                <Button title="Incorrect" style={styles.incorrectBtn} onPress={handleIncorrect} />
                <Button title="Correct" style={styles.correctBtn} onPress={handleCorrect} />
            </View>
        </ScreenView>
    )
}