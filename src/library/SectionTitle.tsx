import * as React from "react"
import { StyleSheet, View } from "react-native"
import { Text } from "library/Text"
import { useTheme } from "contexts/ThemeContext"

type SectionTitleProps = {
    title: string
}

export const SectionTitle = ({ title }: SectionTitleProps) => {
    const { theme } = useTheme()

    const styles = StyleSheet.create({
        container: {
            marginLeft: theme.spacing.tertiary,
            marginBottom: theme.spacing.tertiary
        },
        text: {
            color: theme.colors.primary
        }
    })

    return (
        <View style={styles.container}>
            <Text h3 style={styles.text}>{title}</Text>
        </View>
    )
}