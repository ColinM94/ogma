import * as React from "react"
import { StyleSheet } from "react-native"
import { createStackNavigator } from "@react-navigation/stack"
import { ScreenParams } from "./types"
import { useTheme } from "contexts/ThemeContext"
import { Signin } from "screens/Signin"
import { TabsNavigation } from "./TabNavigation"
import { useNavigation } from "@react-navigation/native"
import { useAuth } from "contexts/AuthContext"
import { CreateCard } from "screens/CreateCard/CreateCard"

// <..Params> adds Type checking for initialParams screen prop.
const Stack = createStackNavigator<ScreenParams>()

export const StackNavigation = () => {
    const { theme } = useTheme()
    const { currentUser } = useAuth()

    const styles = StyleSheet.create({
        header: {
            elevation: 4,
        },
    })

    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: styles.header,
                headerTitleStyle: theme.typography.h3,
                headerShown: false,
            }}
        >
            {!currentUser.isSignedIn && (
                <>
                    <Stack.Screen name="Signin" component={Signin} />
                </>
            )}

            {currentUser.isSignedIn && (
                <>
                    <Stack.Screen name="TabNavigation" component={TabsNavigation} />
                    <Stack.Screen name="CreateCard" component={CreateCard} />
                </>
            )}
        </Stack.Navigator>
    )
}
