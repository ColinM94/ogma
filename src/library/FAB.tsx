import * as React from "react"
import { StyleSheet, View } from "react-native"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { useTheme } from "contexts/ThemeContext"
import { MyView } from "./MyView"

type FABProps = {
    onPress: () => void
}

export const FAB = ({ onPress }: FABProps) => {
    const { theme } = useTheme()

    const styles = StyleSheet.create({
        container: {
            overflow: "hidden",
            borderRadius: 25,
            position: 'absolute',
            right: 12,
            bottom: 12
        },
        fab: {
            backgroundColor: theme.colors.primary,
            padding: 15
        },
    })

    return (
        <View style={styles.container}>
            <MyView style={styles.fab} onPress={onPress}>
                <FontAwesomeIcon icon="plus" size={20} color="white" />
            </MyView>
        </View>
    )
}