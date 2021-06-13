import * as React from "react"
import { View, Text, StyleSheet, FlatList } from "react-native"
import { CardListProps } from "navigation/types"
import { useTheme } from "contexts/ThemeContext"
import { FAB } from "library/FAB"
import { getCards } from "api/firestore"
import { useToast } from "contexts/ToastContext"
import { CardListItem } from "./CardListItem"
import { useAuth } from "contexts/AuthContext"
import { Header } from "library/Header"
import { Input } from "library/Input"
import { ScreenContainer } from "library/ScreenContainer"
import { IconButton } from "library/IconButton"

export const CardList = ({ navigation, route }: CardListProps) => {
    const { theme } = useTheme()
    const { toast } = useToast()
    const { currentUser } = useAuth()

    const [cards, setCards] = React.useState<FlashCardData[]>([])

    React.useEffect(() => {
        loadData()
    }, [])

    const loadData = async () => {
        try {
            let cards = await getCards(currentUser.id!)
            setCards(cards)
        } catch (error) {
            toast(error.message)
        }
    }

    const itemSeparator = () => <View style={styles.itemSeparator} />

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "center",
            padding: theme.spacing.primary,
        },
        itemSeparator: {
            height: theme.spacing.primary,
        },
    })

    return (
        <ScreenContainer style={styles.container}>
            <View
                style={{
                    flexDirection: "row",
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: theme.spacing.primary,
                }}
            >
                <Input
                    leftIcon="search"
                    containerStyle={{
                        flex: 1,
                        marginBottom: 0,
                    }}
                />
                <IconButton icon="ellipsis-v" style={{ marginHorizontal: 4 }} />
            </View>

            <FlatList
                data={cards}
                renderItem={({ item }) => <CardListItem item={item} />}
                ItemSeparatorComponent={itemSeparator}
            />
            <FAB icon="plus" onPress={() => navigation.navigate("CreateCard")} />
        </ScreenContainer>
    )
}
