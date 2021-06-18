import * as React from "react"
import { useNavigation } from "@react-navigation/native"
import { IconButton, IconButtonProps } from "library/IconButton"
import { StyleProp, ViewStyle } from "react-native"

interface HeaderBackBtnProps {
    style: StyleProp<ViewStyle>
}

export const HeaderBackBtn = ({ style }: HeaderBackBtnProps) => {
    const navigation = useNavigation()

    const goBack = () => {
        navigation.goBack()
    }

    return <IconButton icon="arrow-left" onPress={goBack} style={style} />
}
