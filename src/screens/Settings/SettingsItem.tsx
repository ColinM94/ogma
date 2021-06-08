import * as React from "react"
import { StyleSheet, View, Text } from "react-native"
import { useTheme } from "contexts/ThemeContext"
import { Card } from "library/Card"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { Icon } from "library/Icon"

interface SettingsItemProps {
    title: string
    subtitle: string
    onPress: () => {}
    icon?: IconProp
    rightContent?: React.ReactNode
}

export const SettingsItem = (props: SettingsItemProps) => {
    const { theme } = useTheme()
    const { title, subtitle, onPress, icon, rightContent } = props
    const iconSize = 28

    const styles = StyleSheet.create({
        card: {
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: theme.colors.card,
        },
        cardRight: {
            marginLeft: "auto",
        },
    })

    return (
        <Card style={styles.card} onPress={onPress}>
            <View>
                <Text style={theme.typography.h3}>{title}</Text>
                <Text style={theme.typography.subtitle}>{subtitle}</Text>
            </View>
            {icon && (
                <View style={styles.cardRight}>
                    <Icon
                        icon={icon}
                        size={iconSize}
                        color={theme.colors.text.secondary}
                    />
                </View>
            )}

            {rightContent && (
                <View style={styles.cardRight}>{rightContent}</View>
            )}
        </Card>
    )
}
