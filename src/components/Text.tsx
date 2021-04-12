import * as React from "react"
import { StyleProp, Text as RNText, TextProps as RNTextProps, TextStyle } from "react-native"
import { useTheme } from "../contexts/ThemeContext"

type TextProps = RNTextProps & {
    title?: boolean,
    h1?: boolean,
    h2?: boolean,
    body?: boolean,
    subtitle?: boolean,
    input?: boolean,
    button?: boolean,
    style?: StyleProp<TextStyle>,
    children?: string | JSX.Element | JSX.Element[]
}

export const Text = (props: TextProps) => {
    const { title, h1, h2, body, subtitle, input, button, style, children, ...rest } = props
    const { theme } = useTheme()

    const getStyle = () => {
        if (title) return theme.typography.title
        if (h1) return theme.typography.h1
        if (h2) return theme.typography.h2
        if (body) return theme.typography.body
        if (subtitle) return theme.typography.subtitle
        if (input) return theme.typography.input
        if (button) return theme.typography.button
        return theme.typography.body
    }

    return (
        <RNText style={[getStyle(), style]} {...rest}>
            {children}
        </RNText>
    )
}