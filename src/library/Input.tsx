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
    leftIcon?: IconProp,
    rightIcon?: IconProp,
    style?: StyleProp<ViewStyle>,
    containerStyle?: StyleProp<ViewStyle>,
    onPress?: () => void
}

export const Input = (props: InputProps) => {
    const { label, style, onPress, setValue, containerStyle, leftIcon, rightIcon, ...rest } = props
    const { theme } = useTheme()
    let textInput: any = null

    const styles = StyleSheet.create({
        container: {
            backgroundColor: theme.colors.card,
            padding: theme.spacing.primary,
            marginBottom: theme.spacing.primary
        },
        input: {
            flexGrow: 1
        },
        rightIcon: {
            alignSelf: "center",
            marginLeft: theme.spacing.secondary
        },
        leftIcon: {
            alignSelf: "center",
            marginRight: theme.spacing.secondary
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
    
    //{label && <Text subtitle2 style={styles.label}>{label}</Text>}

    return (   
        <MyView direction="row" style={styles.container}>
            {leftIcon && 
                <FontAwesomeIcon
                    icon="envelope"
                    color={theme.icon.color}
                    size={theme.icon.size}
                    style={styles.leftIcon}
                />
            }   
            <TextInput
                ref={(input) => { textInput = input }}
                onChangeText={handleChange}
                style={[styles.input, theme.typography.input, style]}
                placeholderTextColor={theme.colors.text.tertiary}
                {...rest}
            />
            {rightIcon && 
                <FontAwesomeIcon
                    icon="eye"
                    color={theme.icon.color}
                    size={theme.icon.size}
                    style={styles.rightIcon}
                />
            }
        </MyView>     
    )
}