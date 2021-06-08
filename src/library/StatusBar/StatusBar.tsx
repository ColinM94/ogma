import * as React from "react"
import { StatusBar as ExpoStatusBar } from "expo-status-bar"
import { useTheme } from "contexts/ThemeContext"

export const StatusBar = () => {
    const { theme, isDark } = useTheme()

    return (
        <ExpoStatusBar style={isDark ? "light" : "dark"} translucent={true} />
    )
}
