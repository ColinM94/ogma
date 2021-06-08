import * as React from "react"
import {
    FontAwesomeIcon,
    FontAwesomeIconStyle,
} from "@fortawesome/react-native-fontawesome"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { ColorValue } from "react-native"
import { useTheme } from "contexts/ThemeContext"

interface IconProps {
    size?: number
    icon: IconProp
    color?: ColorValue
    style?: FontAwesomeIconStyle
    testID?: string
}

export const Icon = (props: IconProps) => {
    const { theme } = useTheme()

    const {
        icon,
        color = theme.icon.color,
        size = theme.icon.size,
        style,
        testID,
    } = props

    return (
        <FontAwesomeIcon
            icon={icon}
            color={color}
            size={size}
            style={style}
            testID={testID}
        />
    )
}
