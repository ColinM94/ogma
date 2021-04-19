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
        },
        line: {
            height: 1,
            backgroundColor: theme.colors.text.tertiary
        },
        leftLine: {
            flex: 1
        },
        rightLine: {
            flex: 20,
        },
        text: {
            color: theme.colors.primary,
            marginVertical: theme.spacing.tertiary,
            marginHorizontal: theme.spacing.tertiary
        }
    })

    return (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
            {/*             <View style={[styles.line, styles.leftLine]} /> */}
            <Text subtitle style={styles.text}>{title}</Text>
            {/*             <View style={[styles.line, styles.rightLine]} /> */}
        </View>
    )
}