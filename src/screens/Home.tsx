import * as React from "react"
import { Pressable, StyleSheet, View } from "react-native"

import { useTheme } from "contexts/ThemeContext"
import { HomeProps } from "navigation/types"
import { MyView } from "library/MyView"
import { Input } from "library/Input"
import { Card } from "library/Card"
import { Text } from "library/Text"
import { ScreenView } from "library/ScreenView"
import { SectionTitle } from "library/SectionTitle"
import { DateTimePicker } from "library/DateTimePicker"
import { ImagePicker } from "library/ImagePicker"
import { Button } from "library/Button"
import { Header } from "library/Header"


export const Home = ({ navigation, route }: HomeProps) => {
    const [text, setText] = React.useState()
    const [date, setDate] = React.useState()

    const { theme } = useTheme()

    const styles = StyleSheet.create({

    })

    const toStudy = () => {
        navigation.navigate("Study")
    }

    return (
        <>
            {/*   <Header title="Home" /> */}
            <ScreenView>
                <Button title="Study" onPress={() => navigation.navigate("Study")} />
            </ScreenView>
        </>
    )
}