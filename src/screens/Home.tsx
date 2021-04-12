import * as React from "react"
import { StyleSheet, View } from "react-native"

import { useTheme } from "contexts/ThemeContext"
import { ScreenView } from "components/ScreenView"
import { Text } from "components/Text"
import { Card } from "components/Card"
import { Button } from "components/Button"
import { HomeProps } from "navigation/types"


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