import * as React from "react"
import { StyleSheet, View } from "react-native"
import { FlatList } from "react-native-gesture-handler"

import { ScreenView } from "library/ScreenView"

import { Input } from "library/Input"
import { Text } from "library/Text"
import { Card } from "library/Card"
import { FAB } from "library/FAB"
import { getCards } from "api/database"
import { CardListProps } from "navigation/types"
import { useToast } from "contexts/ToastContext"
import { useTheme } from "contexts/ThemeContext"
import { formatDate, formatTime } from "common/helpers"
import { FlashCard } from "common/types"
import { Header } from "library/Header"

export const CardList = ({ navigation, route }: CardListProps) => {
    const [search, setSearch] = React.useState("")
    const [cards, setCards] = React.useState<FlashCard[]>([])
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

    const cardItem = ({ item }: { item: FlashCard }) => (
        <Card direction="row" mb={0} onPress={() => navigation.navigate("CardDetails", { item: item })}>
            <View>
                <Text h2>{item.front.title}</Text>
                <Text subtitle>{item.front.subtitle}</Text>
            </View>
            <View style={{ justifyContent: "center", marginLeft: "auto", alignItems: "flex-start" }}>
                <Text subtitle2 >{item.category}</Text>
            </View>
        </Card>
    )

    const searchBox = <Input value={search} setValue={setSearch} style={styles.search} placeholder="Search" rightIcon="search" returnKeyType="search" />

    async function handleFAB() {
        navigation.navigate("CreateCard")
    }

    return (
        <>
            {/*       <Header title={"Your Deck"} /> */}
            <ScreenView data={cards} renderItem={cardItem} headerComponent={searchBox} onRefresh={loadData} />
            <FAB onPress={handleFAB} />
        </>
    )
}