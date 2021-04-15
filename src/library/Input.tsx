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
        <Card onPress={handlePress} style={styles.container}>
            <View pointerEvents="none" style={{ width: "100%" }}>
                {label && <Text subtitle2 style={styles.label}>{label}</Text>}
                <MyView direction="row">
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
            </View>
        </Card>

    )
}