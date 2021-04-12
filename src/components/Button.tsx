import * as React from "react"
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native"
import { useTheme } from "../contexts/ThemeContext"
import { PressableView } from "./PressableView"
import { Text } from "./Text"

type ButtonProps = {
    title: string,
    onPress: () => void,
    style?: StyleProp<ViewStyle>
}

export const Button = (props: ButtonProps) => {
    const { title, style, onPress } = props
    const { theme } = useTheme()

    const styles = StyleSheet.create({
        button: {
            backgroundColor: theme.colors.primary,
            padding: theme.spacing.primary,
            alignItems: "center",
            borderRadius: theme.roundness,
        }
    })

    return (
        <PressableView style={[styles.button, style]} onPress={onPress}>
            <Text button>{title}</Text>
        </PressableView>
    )
}