import * as React from "react"
import { StyleProp, StyleSheet, TextStyle, Pressable, ViewStyle, Text } from "react-native"
import { useTheme } from "contexts/ThemeContext"

export interface ButtonProps {
    title: string
    style?: StyleProp<ViewStyle>
    textStyle?: StyleProp<TextStyle>
    onPress?: () => void
}

export const Button = (props: ButtonProps) => {
    const { title, style, textStyle, ...rest } = props
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
        <Pressable 
            style={({ pressed }) => [
                {
                    opacity: pressed ? 0.8 : 1
                },
                styles.button, 

            ]}  
            testID="button"
            {...rest}
        >     
            <Text style={[theme.typography.button, styles.text, textStyle]}>{title}</Text>
        </Pressable>
    )
}