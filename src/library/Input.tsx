import * as React from "react"
import { StyleProp, StyleSheet, TextInput, TextInputProps, View } from "react-native"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { useTheme } from "contexts/ThemeContext"
import { Card, CardProps } from "./Card"
import { Text } from "./Text"
import { ViewStyle } from "react-native"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { PressableView } from "./PressableView"

export interface InputProps extends Omit<TextInputProps, "onBlur" | "onFocus">, CardProps {
    label?: string,
    setValue?: (value: string) => void,
    rightIcon?: IconProp,
    style?: StyleProp<ViewStyle>,
    containerStyle?: StyleProp<ViewStyle>,
}

export const Input = (props: InputProps) => {
    const { label, style, onPress, setValue, containerStyle, rightIcon, ...rest } = props
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
            alignSelf: "flex-end",
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

    const handleChange = (text: string) => {
        setValue && setValue(text)
    }

    return (
        <Card style={containerStyle} onPress={handlePress}>
            <View pointerEvents="none">
                {label && <Text subtitle2 style={{ marginBottom: theme.spacing.tertiary }}>{label}</Text>}
                <PressableView direction="row">
                    <TextInput
                        ref={(input) => { textInput = input }}
                        onChangeText={handleChange}
                        style={[styles.input, style]}
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
                </PressableView>
            </View>
        </Card>
    )
}