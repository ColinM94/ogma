import * as React from "react"
import { StyleSheet, View } from "react-native"
import { useTheme } from "contexts/ThemeContext"
import { Card } from "library/Card"
import { Text } from "library/Text"
import { Divider } from "library/Divider"
import { FlashCard as FlashCardType } from "common/types"

type FlashCardProps = {
    item: FlashCardType
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
                <Text h1 style={styles.title}>{item.front.title}</Text>
                <Text subtitle>{item.front.subtitle}</Text>
            </View>
            <Divider style={styles.divider} />
            <View style={styles.cardSection}>
                <Text h1 style={styles.title}>{item.back.title}</Text>
                <Text subtitle>{item.back.subtitle}</Text>
            </View>
        </Card>
    )
}