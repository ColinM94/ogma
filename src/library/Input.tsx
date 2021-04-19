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
    label?: string
    setValue?: (value: string) => void
    leftIcon?: IconProp
    rightIcon?: IconProp
    style?: StyleProp<ViewStyle>
    containerStyle?: StyleProp<ViewStyle>
    /** Basically turns the input into a button. */
    onPress?: () => void,
    onBlur: () => void
}

export const Input = (props: InputProps) => {
    const { label, style, onPress, setValue, containerStyle, leftIcon, rightIcon, onBlur, ...rest } = props
    const { theme } = useTheme()

    const [focused, setFocused] = React.useState(false)

    let inputRef: any

    const styles = StyleSheet.create({
        container: {
            borderColor: focused ? theme.colors.primary : "darkgrey",
            borderWidth: 1,
/*             backgroundColor: theme.colors.card,
 */            padding: theme.spacing.secondary,
            paddingTop: label ? theme.spacing.tertiary : undefined,
            marginBottom: theme.spacing.primary,
            justifyContent: "center",
            borderRadius: theme.roundness
        },
        label: {
            fontSize: 14,
            letterSpacing: -0.25,
            color: theme.colors.text.secondary
        },
        input: {
            flexGrow: 1,

        },
        rightIcon: {
            alignSelf: "center",
            marginLeft: theme.spacing.secondary,
        },
        leftIcon: {
            alignSelf: "center",
            marginRight: theme.spacing.secondary
        }
    })

    const handlePress = () => {
        if (onPress) {
            setFocused(true)
            onPress()
        } else {
            inputRef?.blur()
            inputRef?.focus()
        }
    }

    const handleFocus = () => {
        setFocused(true)
    }

    const handleBlur = () => {
        onBlur()
        setFocused(false)
    }
    //{label && <Text subtitle2 style={styles.label}>{label}</Text>}

    return (
        <MyView onPress={handlePress} feedbackEnabled={false} style={[styles.container, containerStyle]}>
            {label &&
                /*                 <View
                                    style={{
                                        justifyContent: "center",
                                        borderRightWidth: 1,
                                        borderRightColor: theme.colors.accent,
                                        paddingRight: theme.spacing.tertiary,
                                        marginRight: theme.spacing.primary,
                                        width: 100
                                    }}>
                                    <Text subtitle2 style={styles.label}>{label}</Text>
                                </View> */
                <Text subtitle>{label}</Text>
            }
            {leftIcon &&
                <FontAwesomeIcon
                    icon={leftIcon}
                    color={theme.icon.color}
                    size={theme.icon.size}
                    style={styles.leftIcon}
                />
            }
            <TextInput
                placeholderTextColor={theme.colors.text.tertiary}
                style={[styles.input, theme.typography.input, style]}
                returnKeyType={"next"}
                onFocus={handleFocus}
                onBlur={handleBlur}
                ref={r => inputRef = r}
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
    )
}