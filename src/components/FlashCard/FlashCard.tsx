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
            flex: 1,
            justifyContent: "space-around",
            paddingBottom: "10%",
        },
        category: {
            position: "absolute",
            top: theme.spacing.primary,
            right: theme.spacing.primary,
        },
        textContainer: {
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
        },
        line: {
            ...(theme.typography.h1 as TextStyle),
            marginBottom: theme.spacing.primary,
        },
        notes: {
            ...(theme.typography.subtitle as TextStyle),
            fontStyle: "italic",
            lineHeight: 28,
        },
        divider: {
            height: 2,
            width: "100%",
            backgroundColor: theme.colors.text.tertiary,
        },
        textSpacer: {
            height: 50,
        },
    })

    const displayLine = (text: string) =>
        text ? <Text style={styles.line}>{text}</Text> : <></>

    const displayLine2 = (text: string) =>
        text ? (
            <Text style={[styles.line, { color: theme.colors.text.secondary }]}>
                {text}
            </Text>
        ) : (
            <></>
        )

    const displayNotes = (text: string) =>
        text ? <Text style={styles.notes}>{text}</Text> : <></>

    return (
        <Card style={styles.container}>
            <View style={styles.category}>
                <Text style={styles.notes}>{data.category}</Text>
            </View>
            <View style={styles.textContainer}>
                {displayLine(data.front.line1.text)}
                {displayLine2(data.front.line2.text)}
                {displayNotes(data.front.notes.text)}
            </View>
            <View style={styles.divider} />
            <View style={styles.textContainer}>
                {displayLine(data.back.line1.text)}
                {displayLine2(data.back.line2.text)}
                {displayNotes(data.back.notes.text)}
            </View>
        </Card>
    )
}
