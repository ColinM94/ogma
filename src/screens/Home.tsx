import * as React from "react"
import { StyleSheet, View } from "react-native"

import { useTheme } from "contexts/ThemeContext"
import { HomeProps } from "navigation/types"
import { ScreenView } from "library/ScreenView"
import { Button } from "library/Button"

export const Home = ({ navigation, route }: HomeProps) => {
    const { theme } = useTheme()

    const styles = StyleSheet.create({

    })

    const toStudy = () => {
        navigation.navigate("Study")
    }

    return (
        <ScreenView>
            <Button title="Study" onPress={toStudy} />
        </ScreenView>
    )
}