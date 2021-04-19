import * as React from "react"
import { StyleSheet, View } from "react-native"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"

import { Card } from "library/Card"
import { ScreenView } from "library/ScreenView"
import { Text } from "library/Text"
import { useTheme } from "contexts/ThemeContext"
import { useAuth } from "contexts/AuthContext"
import { signOut } from "api/auth"

export const Settings = () => {
    const { theme, isDark, setIsDark } = useTheme()
    const { isSignedIn } = useAuth()

    const toggleDarkTheme = () => {
        setIsDark(!isDark)
    }

    const handleSignOut = () => {
        signOut().catch(error => alert(error.message))
    }

    const iconSize = 26
    const styles = StyleSheet.create({
        rightColumn: {
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            marginRight: theme.spacing.tertiary
        }
    })

    return (
        <ScreenView>
            <Card onPress={toggleDarkTheme} direction="row">
                <View style={{ flex: 1 }}>
                    <Text h3>{isDark ? "Light Mode" : "Dark Mode"}</Text>
                    <Text subtitle2 style={{ color: theme.colors.primary }}>{isDark ? "Switch to light theme" : "Switch to dark theme"}</Text>
                </View>
                {/*                 <View style={styles.rightColumn}>
                    <Switch value={isDark} onValueChange={toggleDarkTheme} color={theme.colors.primary} />
                </View> */}
                <View style={[styles.rightColumn]}>
                    <FontAwesomeIcon icon={isDark ? "sun" : "moon"} color={theme.icon.color} size={iconSize} />
                </View>
            </Card>
            <Card onPress={handleSignOut} direction="row" >
                <View style={{ flex: 1 }}>
                    <Text h3>Sign Out</Text>
                    <Text subtitle2 style={{ color: theme.colors.primary }}>Return to signin screen</Text>
                </View>
                <View style={[styles.rightColumn]}>
                    <FontAwesomeIcon icon="sign-out-alt" color={theme.icon.color} size={iconSize} />
                </View>
            </Card>
        </ScreenView>
    )
}