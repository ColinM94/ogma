import * as React from "react"
import { Text, StyleSheet, View, TextStyle } from "react-native"
import { ScreenContainer } from "library/ScreenContainer"
import { useTheme } from "contexts/ThemeContext"
import { Card } from "library/Card"

interface FlashCardProps {
    data: FlashCardData
}

export const FlashCard = ({ data }: FlashCardProps) => {
    const { theme } = useTheme()

    const styles = StyleSheet.create({
        container: {
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
        },
        front: {
            flex: 1,
            justifyContent: "center",
        },
        back: { flex: 1, justifyContent: "center", paddingBottom: 40 },
        word: {
            ...(theme.typography.h1 as TextStyle),
        },
        notes: {
            ...(theme.typography.subtitle as TextStyle),
            fontStyle: "italic",
        },
    })

    return (
        <Card style={styles.container}>
            <View style={styles.front}>
                <Text style={styles.word}>{data.front.line1.text}</Text>
                {data.front.line2.text !== "" && (
                    <Text style={styles.word}>{data.front.line2.text}</Text>
                )}
                {data.front.notes.text !== "" && (
                    <Text style={styles.notes}>{data.front.notes.text}</Text>
                )}
            </View>
            <View style={styles.back}>
                <Text style={styles.word}>{data.back.line1.text}</Text>
                {data.back.line2.text !== "" && (
                    <Text style={styles.word}>{data.back.line2.text}</Text>
                )}
                {data.back.notes.text !== "" && (
                    <Text style={styles.notes}>{data.back.notes.text}</Text>
                )}
            </View>
        </Card>
    )
}
