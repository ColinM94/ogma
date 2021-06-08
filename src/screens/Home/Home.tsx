import * as React from "react"
import { View, Text, StyleSheet } from "react-native"
import { HomeProps } from "navigation/types"
import { useTheme } from "contexts/ThemeContext"

export const Home = ({ navigation, route }: HomeProps) => {
    const { theme } = useTheme()

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
        },
    })

    return (
        <View style={styles.container}>
            <Text style={theme.typography.h1}>Home Screen</Text>
        </View>
    )
}
