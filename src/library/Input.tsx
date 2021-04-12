import * as React from "react"
import { StyleProp, StyleSheet, TextInput, TextInputProps, View, ViewStyle } from "react-native"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { useTheme } from "contexts/ThemeContext"
import { Card } from "./Card"
import { Text } from "./Text"
import { PressableView } from "./PressableView"

export type InputProps = TextInputProps & {
    label?: string,
    onPress?: () => void,
    setValue?: (value: string) => void,
    rightIcon?: IconProp,
    containerStyle?: StyleProp<ViewStyle>
}

export const Input = (props: InputProps) => {
    const { label, style, containerStyle, onPress, setValue, rightIcon, ...rest } = props
    const { theme } = useTheme()
    let textInput: any = null

    const styles = StyleSheet.create({
        card: {
            paddingTop: theme.spacing.secondary,
            paddingBottom: theme.spacing.secondary,
            alignItems: "flex-start"
        },
        inputRow: {
            flexDirection: "row",
        },
        input: {
            color: theme.colors.text.primary,
            flexGrow: 1,
            ...theme.typography.input as {},
        },
        rightIcon: {
            alignSelf: "center",
            marginRight: theme.spacing.tertiary
        }
    })

    const handlePress = () => {
        if (onPress) {
            onPress()
        } else {
            textInput.focus()
        }
    }

    return (
        <Card onPress={handlePress}>
            <TextInput
                ref={(input) => { textInput = input; }}
                style={[styles.input, style]}
                placeholderTextColor={theme.colors.text.tertiary}
                {...rest}
            />
        </Card>

    )
}