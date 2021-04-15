import * as React from "react"
import { ScreenView } from "library/ScreenView"
import { CardDetailsProps } from "navigation/types"
import { FlashCard } from "components/FlashCard"


export const CardDetails = ({ navigation, route }: CardDetailsProps) => {
    console.log(route.params.item)
    return (
        <>
            <ScreenView>
                <FlashCard item={route.params.item} />
            </ScreenView>
        </>
    )
}