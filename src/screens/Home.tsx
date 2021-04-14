import * as React from "react"
import { Pressable, StyleSheet, View } from "react-native"

import { useTheme } from "contexts/ThemeContext"
import { HomeProps } from "navigation/types"
import { PressableView } from "library/PressableView"
import { Input } from "library/Input"
import { Card } from "library/Card"
import { Text } from "library/Text"
import { ScreenView } from "library/ScreenView"
import { SectionTitle } from "library/SectionTitle"
import { DateTimePicker } from "library/DateTimePicker"
import { ImagePicker } from "library/ImagePicker"
import { Button } from "library/Button"


export const Home = ({ navigation, route }: HomeProps) => {
    const { theme } = useTheme()

    const styles = StyleSheet.create({

    })

    const toStudy = () => {
        navigation.navigate("Study")
    }

    return (
        <ScreenView >
            <Card>
                <Text h1>Heading 1</Text>
                <Text h2>Heading 2</Text>
                <Text h3>Heading 3</Text>
                <Text body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </Text>
            </Card>
        </ScreenView>
    )
}