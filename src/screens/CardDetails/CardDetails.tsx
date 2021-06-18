import * as React from "react"
import { CardDetailsProps } from "navigation/types"
import { View } from "react-native"
import { FlashCard } from "components/FlashCard/FlashCard"
import { ScreenContainer } from "library/ScreenContainer"
import { Header } from "library/Header"
import { useTheme } from "contexts/ThemeContext"
import { deleteCard } from "api/firestore"
import { useAuth } from "contexts/AuthContext"
import { useToast } from "contexts/ToastContext"

export const CardDetails = ({ navigation, route }: CardDetailsProps) => {
    const { theme } = useTheme()
    const { currentUser } = useAuth()
    const { toast } = useToast()

    const handleDelete = async () => {
        try {
            await deleteCard(currentUser.id!, route.params.data.id)
            navigation.goBack()
        } catch (error) {
            toast(error.message)
        }
    }

    return (
        <>
            <Header
                backBtnEnabled={true}
                rightBtnIcon="trash"
                rightBtnOnPress={handleDelete}
            />
            <View style={{ padding: theme.spacing.primary, flex: 1 }}>
                <FlashCard data={route.params.data} />
            </View>
        </>
    )
}
