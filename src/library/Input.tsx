import * as React from "react"
import { StyleSheet, TextInput, TextInputProps, View } from "react-native"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { useTheme } from "contexts/ThemeContext"
import { Card } from "./Card"
import { Text } from "./Text"

export type InputProps = TextInputProps & {
    label?: string,
    onPress?: () => void,
    setValue?: (value: string) => void,
    rightIcon?: IconProp
}

export const Input = (props: InputProps) => {
    const { label, style, onPress, setValue, rightIcon, ...rest } = props
    const { theme } = useTheme()
    let textInput: any = null

    const styles = StyleSheet.create({
        card: {
            paddingTop: theme.spacing.secondary,
            paddingBottom: theme.spacing.secondary,
            marginBottom: theme.spacing.primary,
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

    const onChange = (text: string) => {
        setValue(text)
    }

    const handlePress = () => {
        if (onPress) {
            onPress()
        } else {
            textInput.focus()
        }
    }

    return (
        <Card onPress={handlePress} style={[styles.card, style]}>
            <>{label && <Text subtitle>{label}</Text>}</>
            <View style={styles.inputRow}>
                <TextInput
                    ref={(input) => { textInput = input; }}
                    style={styles.input}
                    onChangeText={onChange}
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
            </View>
        </Card>
    )
}