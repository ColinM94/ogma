import * as React from "react"
import { StyleProp, StyleSheet, View, ViewStyle, Text } from "react-native"
import Constants from "expo-constants"
import { useTheme } from "contexts/ThemeContext"
import { IconButton, IconButtonProps } from "library/IconButton"
import { IconProp } from "@fortawesome/fontawesome-svg-core"

interface HeaderProps {
    style?: StyleProp<ViewStyle>
    title?: string
    leftBtnIcon?: IconProp
    leftBtnOnPress?: () => void
    rightBtnIcon?: IconProp
    rightBtnOnPress?: () => void
}

export const Header = (props: HeaderProps) => {
    const { theme } = useTheme()

    const { style, title, leftBtnIcon, leftBtnOnPress, rightBtnIcon, rightBtnOnPress } =
        props

    const styles = StyleSheet.create({
        container: {
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: Constants.statusBarHeight + 4,
            paddingBottom: 4,
            paddingHorizontal: theme.spacing.primary,
            backgroundColor: theme.colors.card,
            height: 76,
        },
        title: {
            position: "absolute",
            top: Constants.statusBarHeight + 8,
        },
        leftBtn: {
            marginRight: "auto",
        },
        rightBtn: {
            marginLeft: "auto",
        },
    })

    return (
        <View style={[styles.container, style]}>
            {leftBtnIcon && (
                <IconButton
                    icon={leftBtnIcon}
                    onPress={leftBtnOnPress}
                    style={styles.leftBtn}
                    size={22}
                />
            )}

            <Text style={[theme.typography.h1, styles.title]}>{title}</Text>

            {rightBtnIcon && (
                <IconButton
                    icon={rightBtnIcon}
                    onPress={rightBtnOnPress}
                    style={styles.rightBtn}
                    size={22}
                />
            )}
        </View>
    )
}
