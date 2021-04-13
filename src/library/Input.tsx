import * as React from "react"
import { StyleProp, StyleSheet, TextInput, TextInputProps, View, ViewStyle } from "react-native"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { useTheme } from "contexts/ThemeContext"
import { Card } from "./Card"
import { Text } from "./Text"
import { PressableView, PressableViewProps } from "./PressableView"

export interface InputProps extends TextInputProps {
    label?: string,
    onPress?: () => void,
    setValue?: (value: string) => void,
    rightIcon?: IconProp,
    containerStyle?: StyleProp<ViewStyle>,
}

export const Input = (props: InputProps) => {
    const { label, style, containerStyle, onPress, setValue, rightIcon, mb, ...rest } = props
    const { theme } = useTheme()
    let textInput: any = null

    const styles = StyleSheet.create({
        card: {
            paddingTop: 0,
            paddingBottom: 0,
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
            textInput.blur()
            textInput.focus()
        }
    }

    const handleChange = (text: string) => {
        setValue(text)
    }

    return (
        <Card onPress={handlePress}>
            <View pointerEvents="none">
                {label && <Text subtitle2 style={{marginBottom: theme.spacing.tertiary}}>{label}</Text>}
                <TextInput
                    ref={(input) => { textInput = input }}
                    onChangeText={handleChange}
                    style={[styles.input, style]}
                    placeholderTextColor={theme.colors.text.tertiary}
                    pointerEvents="none"
                    {...rest}
                />
            </View> 
        </Card>

    )
}