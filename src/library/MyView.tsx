import * as React from "react"
import { StyleSheet, View, TouchableWithoutFeedbackProps, ViewProps } from "react-native"
import { useTheme } from "contexts/ThemeContext"
import { TouchableNativeFeedback, TouchableWithoutFeedback } from "react-native-gesture-handler"


export interface MyViewProps extends ViewProps {
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
    /** Enabled/Disabled onPress feedback. Default is true.  */
    feedbackEnabled?: boolean
}

export const MyView = ({ children, onPress, style, feedbackColor, mb, direction = "column", feedbackEnabled = true, ...rest }: MyViewProps) => {
    const { theme } = useTheme()

    // Combines objects in style array into one object. 
    const flattenStyle = StyleSheet.flatten([style])

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
            padding: 0,
        },
        touchable: {
            padding: flattenStyle?.padding,
            paddingVertical: flattenStyle?.paddingVertical,
            paddingHorizontal: flattenStyle?.paddingHorizontal,
            paddingTop: flattenStyle?.paddingTop,
            paddingBottom: flattenStyle?.paddingBottom,
            paddingLeft: flattenStyle?.paddingLeft,
            paddingRight: flattenStyle?.paddingRight,
            flexDirection: direction,
            elevation: flattenStyle?.elevation,
            margin: 0,
        },
    })

    return (
        <>
            {
                feedbackEnabled &&
                <View style={[flattenStyle, styles.rippleFix]}>
                    <TouchableNativeFeedback
                        onPress={onPress}
                        background={TouchableNativeFeedback.Ripple(onPress ? feedbackColor ?? theme.colors.accent : "rgba(0,0,0,0)", false)}
                        style={styles.touchable}
                        {...rest}
                    >
                        {children}
                    </TouchableNativeFeedback>
                </View>
            }
            {
                !feedbackEnabled &&
                <TouchableWithoutFeedback
                    style={[style, { flexDirection: direction }]}
                    onPress={onPress}
                    {...rest}
                >
                    {children}
                </TouchableWithoutFeedback>
            }
        </>
    )
}