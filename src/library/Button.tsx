import * as React from "react"
import { StyleProp, StyleSheet, ViewStyle } from "react-native"
import { useTheme } from "contexts/ThemeContext"
import { PressableView, PressableViewProps } from "./PressableView"
import { Text } from "./Text"

type ButtonProps = PressableViewProps & {
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
        <PressableView
            style={styles.button}
            onPress={onPress ?? (() => { })}
        >
            <Text button style={styles.text}>{title}</Text>
        </PressableView>
    )
}