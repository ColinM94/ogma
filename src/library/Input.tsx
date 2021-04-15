import * as React from "react"
import { StyleProp, StyleSheet, TextInput, TextInputProps, View } from "react-native"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { useTheme } from "contexts/ThemeContext"
import { Card, CardProps } from "./Card"
import { Text } from "./Text"
import { ViewStyle } from "react-native"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { MyView } from "./MyView"

export interface InputProps extends TextInputProps {
    label?: string,
    setValue?: (value: string) => void,
    rightIcon?: IconProp,
    style?: StyleProp<ViewStyle>,
    containerStyle?: StyleProp<ViewStyle>,
    onPress?: () => void
}

export const Input = (props: InputProps) => {
    const { label, style, onPress, setValue, containerStyle, rightIcon, ...rest } = props
    const { theme } = useTheme()
    let textInput: any = null

    const styles = StyleSheet.create({
        container: {

        },
        inputRow: {
            flexDirection: "row",
        },
        label: {
        },
        input: {
            color: theme.colors.text.primary,
            flexGrow: 1,
        },
        rightIcon: {
            alignSelf: "center",
            marginRight: theme.spacing.tertiary
        },
        leftIcon: {
            alignSelf: "center",
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
        setValue && setValue(text)
    }

    return (
        <Card onPress={handlePress} style={styles.container}>
            <MyView pointerEvents="none" direction="row">
                {label && <Text subtitle2 style={styles.label}>{label}</Text>}
                <TextInput
                    ref={(input) => { textInput = input }}
                    onChangeText={handleChange}
                    style={[styles.input, theme.typography.input, style]}
                    placeholderTextColor={theme.colors.text.tertiary}
                    {...rest}
                />
                {rightIcon &&
                    <FontAwesomeIcon
                        icon={rightIcon}
                        color={theme.icon.color}
                        size={theme.icon.size}
                        style={styles.rightIcon}
                    />
                }

            </MyView>
        </Card>

    )
}