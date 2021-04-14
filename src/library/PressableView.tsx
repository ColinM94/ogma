import * as React from "react"
import { StyleSheet, View, TouchableWithoutFeedbackProps, ViewProps } from "react-native"
import { useTheme } from "contexts/ThemeContext"
import { TouchableNativeFeedback, TouchableWithoutFeedback } from "react-native-gesture-handler"


export interface PressableViewProps extends ViewProps {
    onPress?: () => void,
    /** Components rendered inside this view. */
    children?: React.ReactNode | React.ReactNode[]
    /** Color of press feedback. */
    feedbackColor?: string
    /** Flex direction column */
    column?: boolean
    /** Flex direction. Default is 'column'.*/
    direction?: "row" | "column"
    /** Bottom Margin */
    mb?: number
}

export const PressableView = ({ children, onPress, style, feedbackColor, mb, direction = "column", ...rest }: PressableViewProps) => {
    const { theme } = useTheme()

    // Combines objects in style array into one object. 
    const flattenStyle = StyleSheet.flatten(style)

    const styles = StyleSheet.create({
        rippleFix: {  // Prevents padding being applied to container, as this breaks the ripple effect. 
            overflow: "hidden",
            borderRadius: flattenStyle?.borderRadius,
            margin: flattenStyle?.margin,
            marginVertical: flattenStyle?.marginVertical,
            marginHorizontal: flattenStyle?.marginHorizontal,
            marginTop: flattenStyle?.marginTop,
            marginBottom: mb ?? flattenStyle?.marginBottom,
            marginLeft: flattenStyle?.marginLeft,
            marginRight: flattenStyle?.marginRight,
        },
        touchable: {
            margin: undefined,
            marginVertical: undefined,
            marginHorizontal: undefined,
            marginTop: undefined,
            marginBottom: undefined,
            marginLeft: undefined,
            marginRight: undefined,
            flexDirection: direction,
        },
    })

    return (
        <>
            {
                onPress &&
                <View style={styles.rippleFix}>
                    <TouchableNativeFeedback
                        onPress={onPress}
                        background={TouchableNativeFeedback.Ripple(onPress ? feedbackColor ?? theme.colors.accent : "rgba(0,0,0,0)", false)}
                        style={[flattenStyle, styles.touchable]}
                        {...rest}
                    >
                        {children}
                    </TouchableNativeFeedback>
                </View>
            }
            {
                !onPress &&
                <View
                    style={[style, { flexDirection: direction }]}
                    {...rest}
                >
                    {children}
                </View>
            }
        </>
    )
}