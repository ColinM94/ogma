import * as React from "react"
import { View, Text, StyleSheet, FlatList } from "react-native"
import { CardListProps } from "navigation/types"
import { useTheme } from "contexts/ThemeContext"
import { FAB } from "library/FAB"
import { getCards } from "api/database"
import { useToast } from "contexts/ToastContext"
import { FlashCardData } from "common/types"
import { CardListItem } from "./CardListItem"

export const CardList = ({ navigation, route }: CardListProps) => {
    const { theme } = useTheme()
    const { toast } = useToast()

    const [cards, setCards] = React.useState<FlashCardData[]>([])

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
        },
    })

    /*     React.useEffect(() => {
        loadData()
    }, [])

    const loadData = async () => {
        try {
            let cards = await getCards()
            setCards(cards)
        } catch (error) {
            toast(error.message)
        }
    } */

    return (
        <View style={styles.container}>
            <Text style={theme.typography.h1}>Card List</Text>
            {/*             <FlatList data={cards} renderItem={CardListItem} />*/}
            <FAB icon="plus" onPress={() => navigation.navigate("CreateCard")} />
        </View>
    )
}
