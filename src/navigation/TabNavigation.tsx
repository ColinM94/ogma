import * as React from "react"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { ScreenParams } from "./types"
import { Home } from "screens/Home"
import { Settings } from "screens/Settings"
import { Icon } from "library/Icon"
import { CardList } from "screens/CardList/CardList"

const Tab = createMaterialTopTabNavigator<ScreenParams>()

export const TabsNavigation = () => {
    return (
        <Tab.Navigator
            tabBarPosition="bottom"
            tabBarOptions={{ showIcon: true, showLabel: false }}
            initialRouteName="CardList"
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{ tabBarIcon: () => <Icon icon="home" /> }}
            />
            <Tab.Screen
                name="CardList"
                component={CardList}
                options={{ tabBarIcon: () => <Icon icon="list" /> }}
            />
            <Tab.Screen
                name="Settings"
                component={Settings}
                options={{ tabBarIcon: () => <Icon icon="cog" /> }}
            />
        </Tab.Navigator>
    )
}
