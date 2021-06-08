import * as React from "react"
import { StyleSheet } from "react-native"
import { useTheme } from "contexts/ThemeContext"
import { Pressable, PressableProps } from "../Pressable"

export interface CardProps extends PressableProps {}

export const Card = ({ style, children, ...rest }: CardProps) => {
    const { theme } = useTheme()

    const styles = StyleSheet.create({
        card: {
            backgroundColor: theme.colors.card,
            borderRadius: theme.roundness,
            elevation: theme.elevation.card,
            marginBottom: theme.spacing.primary,
            padding: theme.spacing.primary,
        },
    })

    return (
        <Pressable style={[styles.card, style]} testID="card" {...rest}>
            {children}
        </Pressable>
    )
}
