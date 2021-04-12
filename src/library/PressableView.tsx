import * as React from "react"
import { Pressable, PressableAndroidRippleConfig, PressableProps } from "react-native"
import { useTheme } from "contexts/ThemeContext"

type PressableViewProps = PressableProps & {
    feedbackColor?: string,
    children: JSX.Element | JSX.Element[],
}

export const PressableView = ({ onPress, onLongPress, style, feedbackColor, children }: PressableViewProps) => {
    const { theme } = useTheme()

    const rippleConfig: PressableAndroidRippleConfig | null = onPress ? { color: feedbackColor ? feedbackColor : theme.colors.background } : null

    return (
        <Pressable
            onPress={onPress}
            onLongPress={onLongPress}
            android_ripple={rippleConfig}
            style={style}
        >
            {children}
        </Pressable>
    )
}