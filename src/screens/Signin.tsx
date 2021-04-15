
import * as React from "react"
import { StyleSheet, View } from "react-native"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"

import { useTheme } from "contexts/ThemeContext"
import { useToast } from "contexts/ToastContext"
import { ScreenView } from "library/ScreenView"
import { Text } from "library/Text"
import { Card } from "library/Card"
import { Input } from "library/Input"
import { Button } from "library/Button"
import { signIn, signUp } from "api/auth"
import { SigninProps } from "navigation/types"

export const Signin = (props: SigninProps) => {
    const [email, setEmail] = React.useState("colinmaher94@gmail.com")
    const [password, setPassword] = React.useState("Hibernicus94!")
    const [password2, setPassword2] = React.useState("")
    const [name, setName] = React.useState("")
    const [showSignIn, setIsSignIn] = React.useState(true)
    const [selectedIndex, setSelectedIndex] = React.useState(0)

    // Contexts.
    const { showToast } = useToast()
    const { theme } = useTheme()

    // Refs.
    const emailInput = React.createRef()
    const nameInput = React.createRef()
    const passwordInput = React.createRef()
    const password2Input = React.createRef()

    // Errors.
    const [emailError, setEmailError] = React.useState(true)
    const [nameError, setNameError] = React.useState(true)
    const [passwordError, setPasswordError] = React.useState(true)
    const [password2Error, setPassword2Error] = React.useState(true)

    // Icons.
    const iconSize = 24
    const crossIcon = <FontAwesomeIcon icon="times" size={iconSize} color={"red"} />
    const tickIcon = <FontAwesomeIcon icon="check" size={iconSize} color={"green"} />
    const envelopeIcon = <FontAwesomeIcon icon="envelope" size={iconSize} color={theme.icon.color} />
    const userIcon = <FontAwesomeIcon icon="user" size={iconSize} color={theme.icon.color} />
    const lockIcon = <FontAwesomeIcon icon="lock" size={iconSize} color={theme.icon.color} />

    // Regex.
    const emailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    const handleCreateAccount = async () => {
        if (!emailError && !nameError && !passwordError && !password2Error) {
            try {
                await signUp(email, password)
                showToast("Account created successfully :)")
            } catch (error) {
                showToast(error.message)
            }
        } else {
            showToast("Invalid details")
        }
    }

    const handleSignIn = async () => {
        try {
            await signIn(email, password)
        } catch (error) {
            showToast(error.message)
        }
    }

    // Handlers
    const handleEmail = (email: string) => {
        setEmail(email)

        if (emailFormat.test(email)) {
            setEmailError(false)
        } else {
            setEmailError(true)
        }
    }

    const handleName = (name: string) => {
        setName(name)

        if (name.length < 1) {
            setNameError(true)
        } else {
            setNameError(false)
        }
    }

    const handlePassword = (password: string) => {
        setPassword(password)
        password.length < 6 ? setPasswordError(true) : setPasswordError(false)
    }

    const handlePassword2 = (password2: string) => {
        setPassword2(password2)
        password2 !== password ? setPassword2Error(true) : setPassword2Error(false)
    }

    // Reruns validation if user switches to Signup screen. 
    React.useEffect(() => {
        if (!showSignIn) {
            handleEmail(email)
            handleName(name)
            handlePassword(password)
            handlePassword2(password2)
        }
    }, [showSignIn])

    const handleSelected = (index: number) => {
        setSelectedIndex(index)
        if (index == 1) setIsSignIn(true)
        else setIsSignIn(false)
    }

    const styles = StyleSheet.create({
        title: {
            marginTop: theme.spacing.primary,
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: 32
        },
        leftIcon: {
            marginLeft: 10,
            marginRight: 16,
        },
        rightIcon: {
            opacity: showSignIn ? 0 : 100,
            marginRight: 10,
        },
        button: {
            backgroundColor: theme.colors.secondary,
        },
    })

    return (
        <ScreenView>
            <View style={styles.title}>
                <Text h1>Ogma</Text>
                <Text subtitle>Flashcard space repition learning</Text>
            </View>
            <Input
                placeholder="Email"
                value={email}
                onChangeText={text => handleEmail(text)}
                keyboardType="email-address"
                autoCompleteType="email"
            />
            <>
                {!showSignIn &&
                    <Input
                        placeholder="Full Name"
                        value={name}
                        onChangeText={(text) => handleName(text)}
                        autoCompleteType="name"
                    />
                }
            </>
            <Input
                placeholder="Password"
                value={password}
                onChangeText={(text) => handlePassword(text)}
                secureTextEntry={true}
                autoCompleteType={showSignIn ? "off" : "password"}
            />
            <>
                {!showSignIn && (
                    <Input
                        placeholder="Re-Type Password"
                        value={password2}
                        onChangeText={(text) => handlePassword2(text)}
                        secureTextEntry={true}
                    />
                )}
            </>
            <Button
                title={showSignIn ? "Sign In" : "Sign Up"}
                onPress={showSignIn ? handleSignIn : handleCreateAccount}
            />
            <Text
                style={{
                    textAlign: "center",
                    marginTop: 20,
                    padding: 15,
                }}
                onPress={() => setIsSignIn(!showSignIn)}
            >
                {showSignIn
                    ?
                    (<Text subtitle2>Need an account? <Text subtitle style={{ fontWeight: "bold" }}>Sign Up.</Text></Text>)
                    :
                    (<Text subtitle2>Already have an account? <Text subtitle style={{ fontWeight: "bold" }}>Sign In.</Text></Text>)
                }
            </Text>
        </ScreenView>
    )
}

export default Signin
