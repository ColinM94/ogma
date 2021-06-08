import * as React from "react"
import { StyleSheet, View, Text } from "react-native"
import { useTheme } from "contexts/ThemeContext"
import { Icon } from "library/Icon"

export const SignInHeading = () => {
    const { theme } = useTheme()

    const styles = StyleSheet.create({
        container: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 56,
            marginBottom: 40,
            color: theme.colors.text.primary,
        },
        logoContainer: {
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
        },
        textContainer: {
            flexShrink: 1,
        },
        title: {
            color: theme.colors.text.primary,
            fontSize: 40,
        },
        subtitle: {
            color: theme.colors.text.secondary,
            fontSize: 18,
        },
    })

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Icon icon="seedling" size={56} color={theme.colors.primary} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>Ogma</Text>
                <Text style={theme.typography.subtitle} numberOfLines={1}>
                    Spaced repitition learning
                </Text>
            </View>
        </View>
    )
}
