import * as React from "react"
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native"
import { useTheme } from "contexts/ThemeContext"
import { MyView, MyViewProps } from "./MyView"

export interface CardProps extends MyViewProps {

}

export const Card = ({ style, children, ...rest }: CardProps) => {
    const { theme } = useTheme()

    const styles = StyleSheet.create({
        card: {
            //backgroundColor: "rgba(255,255, 255, 0.05)",
            //backgroundColor: "#1E1E1E",
            backgroundColor: theme.colors.card,
            borderRadius: theme.roundness,
            elevation: theme.elevation.card,
            marginBottom: theme.spacing.primary,
            padding: theme.spacing.primary,
            
        }
    })

    return (
        <MyView style={[styles.card, style]} {...rest}>
            {children}
        </MyView>
    )
}
