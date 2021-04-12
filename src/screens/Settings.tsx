import * as React from "react"
import { View } from "react-native"
import { Switch } from "react-native-paper"

import { Card } from "components/Card"
import { ScreenView } from "components/ScreenView"
import { Text } from "components/Text"
import { useTheme } from "contexts/ThemeContext"

export const Settings = () => {
    const { theme, isDark, setIsDark } = useTheme()

    const toggleDarkTheme = () => {
        setIsDark(!isDark)
    }

    return (
        <ScreenView>
            <Card onPress={toggleDarkTheme} direction="row">
                <View>
                    <Text h2>Dark Mode</Text>
                    <Text subtitle>Toggle dark theme</Text>
                </View>
                <Switch value={isDark} onValueChange={toggleDarkTheme} color={theme.colors.primary} style={{ marginLeft: "auto" }} />
            </Card>
        </ScreenView>
    )
}