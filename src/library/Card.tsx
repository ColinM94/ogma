import * as React from "react"
import { StyleProp, StyleSheet, ViewStyle } from "react-native"
import { useTheme } from "contexts/ThemeContext"
import { PressableView } from "./PressableView"

type CardProps = {
    onPress?: () => void,
    children: JSX.Element | JSX.Element[],
    style?: StyleProp<ViewStyle>,
    direction?: "row" | "column"
}

export const Card = ({ onPress, children, style, direction = "column" }: CardProps) => {
    const { theme } = useTheme()

    const styles = StyleSheet.create({
        card: {
            flexDirection: direction,
            backgroundColor: theme.colors.card,
            padding: theme.spacing.primary,
            elevation: theme.elevation.card,
            borderRadius: theme.roundness,
            marginBottom: theme.spacing.primary,
            alignItems: "center",
            justifyContent: "center"
        }
    })

    return (
        <PressableView style={[styles.card, style]} onPress={onPress}>
            {children}
        </PressableView>
    )
}
