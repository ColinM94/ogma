import * as React from "react"
import { ColorValue, StyleProp, StyleSheet, ViewStyle } from "react-native"
import { Icon } from "../Icon"
import { useTheme } from "contexts/ThemeContext"
import { Pressable } from "../Pressable"
import { IconProp } from "@fortawesome/fontawesome-svg-core"

export interface FABProps {
    onPress: () => void
    icon: IconProp
    color?: ColorValue
    iconColor?: ColorValue
    style?: StyleProp<ViewStyle>
}

export const FAB = (props: FABProps) => {
    const { theme } = useTheme()

    const {
        onPress,
        icon,
        color = theme.colors.primary,
        iconColor = "white",
        style,
    } = props

    const styles = StyleSheet.create({
        fab: {
            position: "absolute",
            borderRadius: 30,
            elevation: 8,
            right: 16,
            bottom: 16,
            padding: 16,
            backgroundColor: color,
        },
    })

    return (
        <Pressable
            style={[styles.fab, style]}
            onPress={onPress}
            feedbackColor="lightblue"
            testID="FAB"
        >
            <Icon icon={icon} size={20} color={iconColor} />
        </Pressable>
    )
}
