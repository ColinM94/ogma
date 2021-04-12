import * as React from "react"
import { Pressable, PressableAndroidRippleConfig, StyleProp, ViewStyle } from "react-native"
import { useTheme } from "../contexts/ThemeContext"

type PressableViewProps = {
    onPress?: () => void,
    style?: StyleProp<ViewStyle>
    feedbackColor?: string,
    children: JSX.Element | JSX.Element[],
}

export const PressableView = ({ onPress, style, feedbackColor, children }: PressableViewProps) => {
    const { theme } = useTheme()

    const rippleConfig: PressableAndroidRippleConfig | null = onPress ? { color: feedbackColor ? feedbackColor : theme.colors.background } : null

    return (
        <Pressable android_ripple={rippleConfig} style={style} onPress={onPress}>
            {children}
        </Pressable>
    )
}