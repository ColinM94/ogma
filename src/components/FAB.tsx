import * as React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { StyleSheet, View } from "react-native"
import { PressableView } from "components/PressableView"
import { useTheme } from "contexts/ThemeContext"

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
            <PressableView style={styles.fab} onPress={onPress}>
                <FontAwesomeIcon icon="plus" size={20} color="white" />
            </PressableView>
        </View>
    )
}