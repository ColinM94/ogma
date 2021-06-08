import * as React from "react"
import { StyleSheet, View, ViewProps } from "react-native"
import Constants from "expo-constants"
import { useTheme } from "contexts/ThemeContext"

interface ScreenContainerProps extends ViewProps {
    children: React.ReactNode | React.ReactNode[]
}

/** Prevents content going behind statusbar. */
export const ScreenContainer = (props: ScreenContainerProps) => {
    const { theme } = useTheme()
    const { children, style } = props

    const styles = StyleSheet.create({
        container: {
            paddingTop: Constants.statusBarHeight + (style?.padding ?? 0),
            padding: theme.spacing.primary,
            flex: 1,
        },
    })

    return <View style={[styles.container, style]}>{children}</View>
}
