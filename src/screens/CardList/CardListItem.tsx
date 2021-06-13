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
            flexDirection: "row",
            borderLeftColor: "dodgerblue",
            borderLeftWidth: 4,
        },
        divider: {
            height: 1,
            width: "100%",
            backgroundColor: theme.colors.text.tertiary,
            marginTop: 4,
            marginBottom: 8,
        },
        leftView: {
            flex: 2,
        },
        textContainer: {},
        rightView: {
            flex: 1,
            alignItems: "center",
        },
    })

    return (
        <Card onPress={() => navigation.navigate("CardDetails", { item: item })}>
            <View style={{ flexDirection: "row", flex: 1, marginBottom: 12 }}>
                <View style={{ flex: 1, justifyContent: "center" }}>
                    <Text style={theme.typography.body}>{item.front.line1.text}</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={theme.typography.body}>{item.back.line1.text}</Text>
                    <Text style={theme.typography.body}>{item.back.line2.text}</Text>
                </View>
            </View>
            <View style={{ flexDirection: "row", flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <Text style={[theme.typography.subtitle, { fontStyle: "italic" }]}>
                        {item.front.notes.text}
                    </Text>
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={[theme.typography.subtitle, { fontStyle: "italic" }]}>
                        {item.back.notes.text}
                    </Text>
                </View>
            </View>
        </Card>
    )
}
