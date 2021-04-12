import * as React from "react"
import { StyleSheet, View } from "react-native"
import { FlatList } from "react-native-gesture-handler"

import { ScreenView } from "components/ScreenView"

import { Input } from "components/Input"
import { Text } from "components/Text"
import { Card } from "components/Card"
import { FAB } from "components/FAB"
import { getCards } from "api/database"
import { CardListProps } from "navigation/types"
import { useToast } from "contexts/ToastContext"
import { useTheme } from "contexts/ThemeContext"
import { formatDate, formatTime } from "common/helpers"

export const CardList = ({ navigation, route }: CardListProps) => {
    const [search, setSearch] = React.useState("")
    const [cards, setCards] = React.useState<Card[]>([])
    const { theme } = useTheme()
    const { showToast } = useToast()

    const styles = StyleSheet.create({
        search: {

        },
    })

    React.useEffect(() => {
        loadData()
    }, [])

    const loadData = async () => {
        try {
            let cards = await getCards()
            setCards(cards)
        } catch (error) {
            showToast(error.message)
        }
    }

    const cardItem = ({ item }: { item: Card }) => (
        <Card direction="row" style={{ marginBottom: 0 }} onPress={() => { }}>
            <View style={{ flexDirection: "column" }}>
                <Text h2>{item.english}</Text>
                <Text subtitle>{item.german}</Text>
            </View>
            <View style={{ flexDirection: "column", justifyContent: "center", marginLeft: "auto" }}>
                <Text body>{item.category}</Text>
                <Text subtitle>{formatDate(item.dateCreated)}</Text>
            </View>
        </Card>
    )

    const searchBox = <Input value={search} setValue={setSearch} style={styles.search} placeholder="Search" rightIcon="search" />

    async function handleFAB() {
        navigation.navigate("CreateCard")
    }

    return (
        <>
            <ScreenView data={cards} renderItem={cardItem} headerComponent={searchBox} onRefresh={loadData} />
            <FAB onPress={handleFAB} />
        </>
    )
}