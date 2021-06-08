import * as React from "react"
import { Text } from "react-native"
import { ScreenContainer } from "library/ScreenContainer"

interface FlashCardProps {}

export const FlashCard = ({}: FlashCardProps) => {
    return (
        <ScreenContainer>
            <Text>Hello</Text>
        </ScreenContainer>
    )
}
