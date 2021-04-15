import * as React from "react"
import { StyleSheet, View } from "react-native"
import { useTheme } from "contexts/ThemeContext"
import { IconButton } from "./IconButton"
import { Text } from "./Text"
import { Input } from "./Input"

export const Header = ({ title }) => {
    const { theme } = useTheme()

    const styles = StyleSheet.create({
        container: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: theme.spacing.tertiary,
            width: "100%",
            height: 55,
            backgroundColor: theme.colors.card,
            elevation: theme.elevation.header,
        },
        leftIcon: {
            marginRight: "auto"
        },
        title: {
            position: "absolute",
            left: "auto",
            right: "auto",
        },
        rightIcon: {
            marginLeft: "auto"
        },
        searchContainer: {
            flex: 1,
            height: 45,
            backgroundColor: theme.colors.background
        },
        search: {
            backgroundColor: theme.colors.background
        }
    })

    return (
        <View style={styles.container}>
            <View style={styles.leftIcon}>
                <IconButton icon="bars" onPress={() => { }} />
            </View>
            <View style={styles.title}>
                <Text title>{title}</Text>
            </View>
            <View style={styles.rightIcon}>
                <IconButton icon="ellipsis-v" onPress={() => { }} />
            </View>
        </View>
    )
}