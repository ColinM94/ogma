import * as React from "react"
import { StyleProp, StyleSheet, ViewStyle } from "react-native"
import { useTheme } from "contexts/ThemeContext"
import { MyView, MyViewProps } from "./MyView"
import { Text } from "./Text"

type ButtonProps = MyViewProps & {
    title: string
}

export const Button = ({ title, style, onPress }: ButtonProps) => {
    const { theme } = useTheme()

    const styles = StyleSheet.create({
        button: {
            backgroundColor: theme.colors.primary,
            borderRadius: theme.roundness,
            padding: theme.spacing.primary
        },
        text: {
            textAlign: "center"
        }
    })

    return (
        <MyView
            style={[styles.button, style]}
            onPress={onPress ?? (() => { })}
        >
            <Text button style={styles.text}>{title}</Text>
        </MyView>
    )
}