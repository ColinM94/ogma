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
                <Card onPress={() => {}}>
                    <Text h1>Heading 1</Text>
                    <Text h2>Heading 2</Text>
                    <Text h3>Heading 3</Text>
                </Card>
                <Card>
                    <Text h3>Heading</Text>
                    <Text body>I am a big 'ol body of text.</Text>
                    <Text subtitle>I am a subtitle</Text>
                </Card>
                <Card>
                    <Text body>I am a big 'ol body of text.</Text>
                    <Text subtitle>I am a subtitle</Text>
                </Card>
                <Input placeholder="Input" />
                <Input placeholder="Input" />
                <Button title="Study" onPress={() => navigation.navigate("Study")} />
            </ScreenView>
        </>
    )
}