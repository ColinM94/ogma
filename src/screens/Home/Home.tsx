import * as React from "react"
import { View, Text, StyleSheet } from "react-native"
import { HomeProps } from "navigation/types"
import { useTheme } from "contexts/ThemeContext"
import Swiper from "react-native-deck-swiper"
import { getCards } from "api/firestore"
import { useAuth } from "contexts/AuthContext"

export const Home = ({ navigation, route }: HomeProps) => {
    const { theme } = useTheme()
    const { currentUser } = useAuth()

    const [cards, setCards] = React.useState<FlashCardData[]>([])

    React.useEffect(() => {
        loadData()
    }, [])

    const loadData = async () => {
        let data = await getCards(currentUser.id!)
        setCards(data)
    }

    const card = (cardData: FlashCardData, cardIndex: number) => {
        console.log(cardData)
        return (
            <View style={styles.card}>
                <Text>I am a card</Text>
            </View>
        )
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.colors.background,
            padding: 20,
        },
        card: {
            flex: 1,
            borderRadius: 4,
            borderWidth: 2,
            borderColor: "#E8E8E8",
            justifyContent: "center",
            backgroundColor: "turquoise",
            marginTop: 60,
            marginBottom: 60,
            marginLeft: 30,
            marginRight: 30,
            borderRadius: 30,
            padding: 10,
        },
        text: {
            textAlign: "center",
            fontSize: 50,
            backgroundColor: "transparent",
        },
    })

    return (
        <View style={styles.container}>
            {cards && (
                <Swiper
                    cards={cards}
                    renderCard={card}
                    getNextCardData={({ first, left, right, previousCards }) => {
                        console.log(first)
                        if (previousCards.length >= 10) {
                            // End of deck
                            return null
                        }
                        if (first) {
                            return "This is the first card. This is card #1."
                        } else if (left) {
                            return `You swiped to the left. This is card #${
                                previousCards.length + 1
                            }.`
                        } else if (right) {
                            return `You swiped to the right. This is card #${
                                previousCards.length + 1
                            }.`
                        }
                    }}
                >
                    {(card) =>
                        card === null ? (
                            <View style={styles.card}>
                                <Text style={styles.text}>
                                    This is the end of the deck, pal.
                                </Text>
                            </View>
                        ) : (
                            <View style={styles.card}>
                                <Text style={styles.text}>{card}</Text>
                            </View>
                        )
                    }
                </Swiper>
            )}
        </View>
    )
}
