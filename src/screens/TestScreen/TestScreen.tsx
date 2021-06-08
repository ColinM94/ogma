import * as React from "react"
import { StyleSheet, Switch, Text, TextInput, View } from "react-native"
import { useTheme } from "contexts/ThemeContext"
import { ScreenContainer } from "library/ScreenContainer"
import { Button } from "library/Button"
import { Input } from "library/Input"

export const TestScreen = () => {
    const { theme, isDark, setIsDark } = useTheme()

    const [name, setName] = React.useState("")
    const [age, setAge] = React.useState("")

    const styles = StyleSheet.create({
        container: {
            padding: theme.spacing.primary,
            backgroundColor: theme.colors.background,
        },
    })

    return (
        <ScreenContainer style={styles.container}>
            <Text style={theme.typography.h1}>Heading 1</Text>
            <Text style={theme.typography.h2}>Heading 2</Text>
            <Text style={theme.typography.h3}>Heading 3</Text>
            <Text style={theme.typography.body}>
                I am a nice big body of text so I am. Lorus impsum whatcha mcall it again,
                I can't remember.
            </Text>
            <Text style={theme.typography.overline}>Overline</Text>
            <Text style={theme.typography.subtitle}>Subtitle</Text>
            <Text style={theme.typography.subtitle2}>Subtitle2</Text>
            <Text style={theme.typography.input}>Input</Text>
            <Text style={theme.typography.subtitle}>Placeholder</Text>
            <Input value={name} setValue={setName} />
            <Input value={age} setValue={setAge} />
            <Text style={theme.typography.overline}>Dark Mode</Text>

            <Switch
                value={isDark}
                onValueChange={setIsDark}
                style={{ marginRight: "auto" }}
            />

            <Button title="Press Me" />
        </ScreenContainer>
    )
}
