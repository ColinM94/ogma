import * as React from "react"
import { View, Text, StyleSheet } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { useTheme } from "contexts/ThemeContext"
import { Card } from "library/Card"

interface CardListItemProps {
    item: FlashCardData
}

export const CardListItem = ({ item }: CardListItemProps) => {
    const navigation = useNavigation()
    const { theme } = useTheme()

    const styles = StyleSheet.create({
        card: {
            borderLeftColor: "dodgerblue",
            borderLeftWidth: 4,
            backgroundColor: theme.colors.card,
            paddingHorizontal: 40,
        },
        row: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
        },
        rowItem: {
            flex: 1,
            justifyContent: "center",
        },
    })

    const displayLine = (text: string) =>
        text ? <Text style={theme.typography.body}>{text}</Text> : <></>

    return (
        <Card
            onPress={() => navigation.navigate("CardDetails", { data: item })}
            style={styles.card}
        >
            <View style={[styles.row, { marginBottom: 4 }]}>
                <View style={styles.rowItem}>{displayLine(item.front.line1.text)}</View>
                <View style={styles.rowItem}>{displayLine(item.back.line1.text)}</View>
            </View>
        </Card>
    )
}
