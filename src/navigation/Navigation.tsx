import * as React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { NavigationContainer } from "@react-navigation/native"

import { ScreenParams } from "./types"
import { useTheme } from "contexts/ThemeContext"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"

// Screens.
import { Home } from "screens/Home"
import { Settings } from "screens/Settings"
import { CreateCard } from "screens/CreateCard"
import { CardList } from "screens/CardList"
import { Study } from "screens/Study"
import { CardDetails } from "screens/CardDetails"

// <..Params> adds Type checking for initialParams screen prop. 
const Stack = createStackNavigator<ScreenParams>()
const Tab = createMaterialTopTabNavigator<ScreenParams>()

export const Navigation = () => {
    const { theme } = useTheme()

    const navTheme = {
        dark: true,
        colors: {
            primary: theme.colors.primary,
            background: theme.colors.background,
            card: theme.colors.card,
            text: theme.colors.text.tertiary,
            border: theme.colors.card,
            notification: theme.colors.secondary,
        }
    }

    const tabNavigation = () => (
        <Tab.Navigator
            tabBarPosition="bottom"
            tabBarOptions={{

                showIcon: true,
                showLabel: false,

            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: () => <FontAwesomeIcon icon="home" size={24} color={theme.colors.text.secondary} />
                }}
            />
            <Tab.Screen
                name="CardList"
                component={CardList}
                options={{
                    tabBarIcon: () => <FontAwesomeIcon icon="th-list" size={24} color={theme.colors.text.secondary} />
                }}
            />
            <Tab.Screen
                name="Settings"
                component={Settings}
                options={{
                    tabBarIcon: () => <FontAwesomeIcon icon="cog" size={24} color={theme.colors.text.secondary} />
                }}
            />
        </Tab.Navigator>
    )

    return (
        <NavigationContainer theme={navTheme}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="Tab" component={tabNavigation} />
                <Stack.Screen name="CardDetails" component={CardDetails} />
                <Stack.Screen name="Study" component={Study} />
                <Stack.Screen name="CreateCard" component={CreateCard} />
            </Stack.Navigator>
        </NavigationContainer >

    )
}
