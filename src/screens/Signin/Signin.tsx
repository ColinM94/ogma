import * as React from "react"
import { StyleSheet, View } from "react-native"

import { useTheme } from "contexts/ThemeContext"
import { ScreenContainer } from "library/ScreenContainer"
import { SigninProps } from "navigation/types"
import { SignInHeading } from "./SignInHeading"
import { SignInForm } from "./SignInForm"
import { ScrollView } from "react-native-gesture-handler"

export const Signin = ({ navigation, route }: SigninProps) => {
    const { theme } = useTheme()

    const styles = StyleSheet.create({
        container: {
            padding: theme.spacing.primary,
            backgroundColor: theme.colors.background,
        },
    })

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <SignInHeading />
            <SignInForm />
        </ScrollView>
    )
}

export default Signin
