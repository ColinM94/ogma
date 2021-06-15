import * as React from "react"
import {
    StyleProp,
    StyleSheet,
    TextInput,
    TextInputProps,
    Text,
    ViewStyle,
    View,
} from "react-native"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { useTheme } from "contexts/ThemeContext"
import { Icon } from "../Icon"
import { Pressable } from "../Pressable"

export interface InputProps extends TextInputProps {
    label?: string
    setValue?: (value: string) => void
    leftIcon?: IconProp
    rightIcon?: IconProp
    rightIconOnPress?: () => void
    style?: StyleProp<ViewStyle>
    containerStyle?: StyleProp<ViewStyle>
    /** Basically turns the input into a button. */
    onPress?: () => void
    /*onBlur?: () => void, */
    error?: boolean
    /* Show border as if this input is focused */
    isFocus?: boolean
}

export const Input = (props: InputProps) => {
    const {
        label,
        style,
        onPress,
        setValue,
        containerStyle,
        leftIcon,
        rightIcon,
        rightIconOnPress,
        error,
        isFocus = false,
        ...rest
    } = props

    const { theme } = useTheme()
    const [isFocused, setIsFocused] = React.useState(false)

    let inputRef: any

    const styles = StyleSheet.create({
        container: {
            borderWidth: 1,
            borderColor: error
                ? "red"
                : isFocus
                ? theme.colors.primary
                : isFocused
                ? theme.colors.primary
                : "rgba(0,0,0,0)",
            backgroundColor: theme.colors.card,
            padding: theme.spacing.primary,
            paddingTop: label ? theme.spacing.tertiary : undefined,
            marginBottom: theme.spacing.primary,
            borderRadius: theme.roundness,
            elevation: theme.elevation.card,
        },
        label: {
            fontSize: 14,
            letterSpacing: -0.25,
            color: theme.colors.text.secondary,
        },
        input: {
            flexGrow: 1,
        },
        rightIconContainer: {
            justifyContent: "center",
            alignItems: "center",
            marginRight: theme.spacing.tertiary,
            borderRadius: 40,
            paddingHorizontal: 5,
        },
        leftIcon: {
            alignSelf: "center",
            marginRight: theme.spacing.secondary,
        },
    })

    const handlePress = () => {
        onPress && onPress()
        !onPress && setIsFocused(true)
        inputRef?.blur()
        inputRef?.focus()
        onPress && inputRef?.blur()
    }

    const handleFocus = () => {
        setIsFocused(true)
    }

    const handleBlur = () => {
        setIsFocused(false)
    }

    const handleTextChange = (text: string) => {
        setValue && setValue(text)
    }

    //{label && <Text subtitle2 style={styles.label}>{label}</Text>}

    return (
        <Pressable
            onPress={handlePress}
            feedback={false}
            style={[styles.container, containerStyle]}
            pointerEvents={onPress ? "box-only" : "auto"}
            testID="input"
        >
            <View>
                {label && (
                    <Text style={theme.typography.overline} testID="label">
                        {label}
                    </Text>
                )}
                <View style={{ flexDirection: "row" }}>
                    {leftIcon && (
                        <Icon
                            icon={leftIcon}
                            color={theme.icon.color}
                            size={theme.icon.size}
                            style={styles.leftIcon}
                            testID="leftIcon"
                        />
                    )}
                    <TextInput
                        placeholderTextColor={theme.colors.text.tertiary}
                        style={[styles.input, theme.typography.input, style]}
                        onChangeText={handleTextChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        ref={(r) => (inputRef = r)}
                        testID="inputField"
                        caretHidden={onPress ? true : false}
                        showSoftInputOnFocus={onPress ? false : true}
                        {...rest}
                    />
                    {rightIcon && (
                        <Pressable
                            onPress={rightIconOnPress}
                            feedback={rightIconOnPress ? true : false}
                            style={styles.rightIconContainer}
                            testID="rightIconBtn"
                        >
                            <Icon
                                icon={rightIcon}
                                color={theme.icon.color}
                                size={theme.icon.size}
                                testID="rightIcon"
                            />
                        </Pressable>
                    )}
                </View>
            </View>
        </Pressable>
    )
}
