import * as React from "react"
import { StyleSheet, View } from "react-native"
import { useTheme } from "contexts/ThemeContext"
import { Card } from "library/Card"
import { Text } from "library/Text"
import { Divider } from "library/Divider"

type FlashCardProps = {

}

export const FlashCard = (props: FlashCardProps) => {
    const { theme } = useTheme()

    const styles = StyleSheet.create({
        card: {
            flex: 1,
            marginBottom: theme.spacing.primary,
        },
        cardSection: {
            flex: 1,
            justifyContent: "center"
        },
        title: {
            marginBottom: theme.spacing.secondary
        },
        divider: {
            marginVertical: theme.spacing.primary
        }
    })

    return (
        <Card style={styles.card}>
            <View style={styles.cardSection}>
                <Text h1 style={styles.title}>House</Text>
                <Text subtitle>I like houses.</Text>
            </View>
            <Divider style={styles.divider} />
            <View style={styles.cardSection}>
                <Text h1 style={styles.title}>das Haus</Text>
                <Text subtitle>Ich mag Haüser.</Text>
            </View>
        </Card>
    )
}