import * as React from "react"
import { CardDetailsProps } from "navigation/types"
import { View } from "react-native"
import { FlashCard } from "components/FlashCard/FlashCard"
import { ScreenContainer } from "library/ScreenContainer"

export const CardDetails = ({ navigation, route }: CardDetailsProps) => {
    return (
        <ScreenContainer>
            <FlashCard data={route.params.data} />
        </ScreenContainer>
    )
}
