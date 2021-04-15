import * as React from "react"
import { StyleSheet, View } from "react-native"
import { ScreenView } from "library/ScreenView"
import { Button } from "library/Button"
import { useTheme } from "contexts/ThemeContext"
import { StudyProps } from "navigation/types"
import { FlashCard } from "components/FlashCard"
import { getCards } from "api/database"
import { useToast } from "contexts/ToastContext"
import { FlashCard as FlashCardType } from "common/types"

export const Study = ({ navigation, route }: StudyProps) => {
    const [cards, setCards] = React.useState<FlashCardType[] | []>([])
    const [currentCard, setCurrentCard] = React.useState(0)

    const { theme } = useTheme()
    const { showToast } = useToast()

    React.useEffect(() => {
        loadData()
    }, [])

    const loadData = async () => {
        try {
            let data = await getCards()
            setCards(data)
        } catch (error) {
            showToast(error.message)
        }
    }

    const styles = StyleSheet.create({
        card: {
            flex: 1,
            marginBottom: theme.spacing.primary
        },
        correctBtn: {
            flex: 1,
            backgroundColor: "green",
            marginLeft: theme.spacing.secondary
        },
        incorrectBtn: {
            flex: 1,
            backgroundColor: "red",
            marginRight: theme.spacing.secondary,
        }
    })

    const handleIncorrect = () => {
        if (currentCard <= 0) {
            showToast("Start of Deck")
            return
        }
        setCurrentCard(prev => prev - 1)
    }

    const handleCorrect = () => {
        if (currentCard >= cards.length - 1) {
            showToast("No more cards!")
            return
        }
        setCurrentCard(prev => prev + 1)
    }

    return (
        <ScreenView>
            <>{cards[currentCard] && <FlashCard item={cards[currentCard]} />}</>
            <View style={{ flexDirection: "row" }}>
                <Button title="< Last" style={styles.incorrectBtn} onPress={handleIncorrect} />
                <Button title="Next >" style={styles.correctBtn} onPress={handleCorrect} />
            </View>
        </ScreenView>
    )
}