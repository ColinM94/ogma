import * as React from "react"
import { StyleSheet, View } from "react-native"
import { useTheme } from "contexts/ThemeContext"
import { Card } from "library/Card"
import { Text } from "library/Text"
import { Divider } from "library/Divider"

type FlashCardProps = {
    item: any
}

export const FlashCard = ({ item }: FlashCardProps) => {
    const { theme } = useTheme()

    const styles = StyleSheet.create({
        card: {
            flex: 1,
            alignItems: "center",
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
                <Text h1 style={styles.title}>{item.frontTitle}</Text>
                <Text subtitle>{item.frontSubtitle}</Text>
            </View>
            <Divider style={styles.divider} />
            <View style={styles.cardSection}>
                <Text h1 style={styles.title}>{item.backTitle}</Text>
                <Text subtitle>{item.backSubtitle}</Text>
            </View>
        </Card>
    )
}