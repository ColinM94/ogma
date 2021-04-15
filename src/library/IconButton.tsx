import * as React from "react"
import { View } from "react-native"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { useTheme } from "contexts/ThemeContext"
import { MyView } from "./MyView"

type IconButtonProps = {
    icon: IconProp,
    onPress?: () => void,
    color?: string,
    feedbackColor?: string,
    size?: number
}

export const IconButton = (props: IconButtonProps) => {
    const { theme } = useTheme()

    const {
        icon,
        onPress,
        color = theme.colors.text.primary,
        feedbackColor = theme.colors.accent,
        size = 24
    } = props

    const styles = {
        container: {
            borderRadius: 60,
            overflow: "hidden"
        },
        iconButton: {
            padding: 10
        }
    }

    return (
        <View style={styles.container}>
            <MyView onPress={onPress} feedbackColor={feedbackColor} style={styles.iconButton}>
                <FontAwesomeIcon icon={icon} size={size} color={color} />
            </MyView>
        </View>
    )
}