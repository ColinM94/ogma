import * as React from "react"
import { StyleSheet, View } from "react-native"
import { SettingsProps } from "navigation/types"
import { ScreenContainer } from "library/ScreenContainer"
import { SettingsItemDarkMode } from "./SettingsItemDarkMode"
import { SettingsItemSignOut } from "./SettingsItemSignOut"
import { useTheme } from "contexts/ThemeContext"
import { Header } from "library/Header"
import { IconButton } from "library/IconButton"

export function Settings({ navigation, route }: SettingsProps) {
    const { theme } = useTheme()

    const styles = StyleSheet.create({
        content: {
            padding: theme.spacing.primary,
        },
    })

    return (
        <ScreenContainer style={styles.content}>
            <SettingsItemDarkMode />
            <SettingsItemSignOut />
        </ScreenContainer>
    )
}
