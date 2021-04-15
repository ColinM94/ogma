import * as React from "react"
import { StyleProp, StyleSheet, ViewStyle } from "react-native"
import { useTheme } from "contexts/ThemeContext"
import { MyView, MyViewProps } from "./MyView"

export interface CardProps extends MyViewProps {

}

export const Card = ({ style, children, ...rest }: CardProps) => {
    const { theme } = useTheme()

    const styles = StyleSheet.create({
        card: {
            backgroundColor: theme.colors.card,
            elevation: theme.elevation.card,
            borderRadius: theme.roundness,
            marginBottom: theme.spacing.primary,
            padding: theme.spacing.primary
        }
    })

    return (
        <MyView style={[styles.card, style]} {...rest}>
            {children}
        </MyView>
    )
}
