import * as React from "react"
import { updateUser } from "api/firestore"
import { useAuth } from "contexts/AuthContext"
import { useTheme } from "contexts/ThemeContext"
import { Switch } from "react-native"
import { SettingsItem } from "./SettingsItem"
import { useToast } from "contexts/ToastContext"
import { useLoading } from "contexts/LoadingContext"

export const SettingsItemDarkMode = () => {
    const { theme, isDark, setIsDark } = useTheme()
    const { toast } = useToast()
    const { loading } = useLoading()
    const { currentUser } = useAuth()

    const toggleDarkMode = async () => {
        loading(true)
        setIsDark(!isDark)

        try {
            await updateUser(currentUser.id!, { darkMode: !isDark })
        } catch (err) {
            toast(err.message)
        }

        loading(false)
    }

    return (
        <SettingsItem
            title="Dark Mode"
            subtitle="Toggle dark theme"
            onPress={toggleDarkMode}
            rightContent={
                <Switch
                    value={isDark}
                    onValueChange={toggleDarkMode}
                    thumbColor={theme.colors.primary}
                    trackColor={{
                        false: theme.colors.accent,
                        true: theme.colors.primaryAccent,
                    }}
                    style={{ marginLeft: "auto" }}
                />
            }
        />
    )
}
