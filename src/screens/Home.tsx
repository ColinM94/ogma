import * as React from "react"
import { Pressable, StyleSheet, View } from "react-native"

import { useTheme } from "contexts/ThemeContext"
import { HomeProps } from "navigation/types"
import { PressableView } from "library/PressableView"
import { Input } from "library/Input"
import { Card } from "library/Card"
import { Text } from "library/Text"
import { Button } from "library/Button"
import { ScreenView } from "library/ScreenView"
import { SectionTitle } from "library/SectionTitle"
import { DateTimePicker } from "library/DateTimePicker"
import { FAB } from "react-native-paper"
import { ImagePicker } from "library/ImagePicker"

export const Home = ({ navigation, route }: HomeProps) => {
    const { theme } = useTheme()

    const styles = StyleSheet.create({

    })

    const toStudy = () => {
        navigation.navigate("Study")
    }

    return (
        /*         <ScreenView>
                    <Button title="Study" onPress={toStudy} />
                </ScreenView> */
        <>
            <ScreenView>
                <Card onPress={() => { alert("hello") }}>
                    <Text h1>Heading 1</Text>
                    <Text h2>Heading 2</Text>
                    <Text h3>Heading 3</Text>
                    <Text body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </Text>
                </Card>
                <Input label="Text Input" mb={24}/>
                <Input label="Text Input" />
                <DateTimePicker label="Date Input" />
                <Button title="Press Me" />
            </ScreenView>
        </>

    )
}