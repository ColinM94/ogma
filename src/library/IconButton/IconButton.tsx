import * as React from "react"
import { StyleProp, View, ViewStyle } from "react-native"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { Icon } from "../Icon"
import { useTheme } from "contexts/ThemeContext"
import { Pressable } from "../Pressable"

export type IconButtonProps = {
    icon: IconProp
    onPress?: () => void
    color?: string
    size?: number
    style?: StyleProp<ViewStyle>
}

export const IconButton = (props: IconButtonProps) => {
    const { theme } = useTheme()

    const {
        icon,
        onPress,
        color = theme.colors.text.primary,
        size = theme.icon.size,
        style,
    } = props

    const styles = {
        container: {
            padding: 10,
            borderRadius: 60,
        },
    }

    return (
        <Pressable
            onPress={onPress}
            style={[styles.container, style]}
            testID="iconButton"
        >
            <Icon icon={icon} size={size} color={color} />
        </Pressable>
    )
}
