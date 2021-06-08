import * as React from "react"
import { StyleSheet, View } from "react-native"
import { NavigationContainer } from "@react-navigation/native"

import { useTheme } from "contexts/ThemeContext"
import { StackNavigation } from "./StackNavigation"

export const Navigation = () => {
    const { theme, isDark } = useTheme()

    const navTheme = {
        dark: isDark,
        colors: {
            primary: theme.colors.primary,
            background: theme.colors.background,
            card: theme.colors.card,
            text: theme.colors.text.primary,
            border: theme.colors.card,
            notification: theme.colors.secondary,
        },
    }

    return (
        <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
            <NavigationContainer theme={navTheme}>
                <StackNavigation />
            </NavigationContainer>
        </View>
    )
}
