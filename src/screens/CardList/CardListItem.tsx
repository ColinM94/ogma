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
        },
        rowItem: {
            flex: 1,
        },
    })

    return (
        <Card
            onPress={() => navigation.navigate("CardDetails", { data: item })}
            style={styles.card}
        >
            <View style={[styles.row, { marginBottom: 4 }]}>
                <View style={styles.rowItem}>
                    <Text style={theme.typography.body}>{item.front.line1.text}</Text>
                </View>
                <View style={styles.rowItem}>
                    <Text style={theme.typography.body}>{item.back.line1.text}</Text>
                </View>
            </View>
            <View style={styles.row}>
                {item.front.line2.text !== "" && (
                    <View style={styles.rowItem}>
                        <Text style={theme.typography.body}>{item.front.line2.text}</Text>
                    </View>
                )}

                <View style={styles.rowItem}>
                    <Text style={theme.typography.body}>{item.back.line2.text}</Text>
                </View>
            </View>
        </Card>
    )
}
