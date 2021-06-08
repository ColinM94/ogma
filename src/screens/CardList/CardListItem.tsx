import * as React from "react"
import { View, Text } from "react-native"
import { Card } from "library/Card"
import { useNavigation } from "@react-navigation/native"

export const CardListItem = ({ item }: { item: any }) => {
    const navigation = useNavigation()
    return (
        <Card onPress={() => navigation.navigate("CardDetails", { item: item })}>
            <View>
                <Text>{item.front.title}</Text>
                <Text>{item.front.subtitle}</Text>
            </View>
            <View
                style={{
                    justifyContent: "center",
                    marginLeft: "auto",
                    alignItems: "flex-start",
                }}
            >
                <Text>{item.category}</Text>
            </View>
        </Card>
    )
}
