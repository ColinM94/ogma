import * as React from "react"
import { StyleSheet } from "react-native"

import { useTheme } from "contexts/ThemeContext"
import { ScreenContainer } from "library/ScreenContainer"
import { SigninProps } from "navigation/types"
import { SignInHeading } from "./SignInHeading"
import { SignInForm } from "./SignInForm"

export const Signin = ({ navigation, route }: SigninProps) => {
    const { theme } = useTheme()

    const styles = StyleSheet.create({
        container: {
            padding: theme.spacing.primary,
            backgroundColor: theme.colors.background,
        },
    })

    return (
        <ScreenContainer style={styles.container}>
            <SignInHeading />
            <SignInForm />
        </ScreenContainer>
    )
}

export default Signin
