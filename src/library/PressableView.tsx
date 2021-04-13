import * as React from "react"
import { StyleSheet, Pressable, PressableAndroidRippleConfig, PressableProps, StyleProp, ViewStyle, View } from "react-native"
import { useTheme } from "contexts/ThemeContext"

interface PressableViewProps extends PressableProps {
    /** Components rendered inside this view. */
    children?: JSX.Element | JSX.Element[] | null
    /** Color of press feedback. */
    feedbackColor?: string
    /** Styling for this view. */
    style?: StyleProp<ViewStyle>
    /** Flex direction row. Default direction is column. */
    row?: boolean
    /** Flex direction. */
    column?: boolean
    /** Bottom Margin */
    mb?: number
}

export const PressableView = ({ children, onPress, style, feedbackColor, mb, row, ...rest }: PressableViewProps) => {
    const { theme } = useTheme()

    const rippleConfig: PressableAndroidRippleConfig | null = onPress ? { color: feedbackColor ? feedbackColor : "lightgrey" } : null

    const styles = StyleSheet.create({
        container: {
            ...style as {},
            overflow: "hidden",
            // Prevents padding being applied to container, as this breaks the ripple effect. 
            padding: undefined,
            paddingVertical: undefined,
            paddingHorizontal: undefined,
            paddingTop: undefined,
            paddingBottom: undefined,
            paddingLeft: undefined,
            paddingRight: undefined,
        },
        pressable: {
            flexDirection: row ? "row" : "column",
            // Applies padding to pressable instead of container so ripple works correctly. 
            paddingVertical: style?.paddingVertical,
            paddingHorizontal: style?.paddingHorizontal,
            padding: style?.padding ?? undefined,
            paddingTop: style?.paddingTop,
            paddingBottom: style?.paddingBottom,
            paddingLeft: style?.paddingLeft,
            paddingRight: style?.paddingRight,
        }
    })

    return (
        <View style={styles.container}>
            <Pressable
                onPress={onPress}
                android_ripple={rippleConfig}
                style={styles.pressable}
                {...rest}
            >
                {children}
            </Pressable>
        </View>

    )
}