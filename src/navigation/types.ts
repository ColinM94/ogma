import { RouteProp } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { MaterialTopTabNavigationProp } from "@react-navigation/material-top-tabs"

// Param types for each screen.
export type ScreenParams = {
    Signin: undefined
    TabNavigation: undefined
    Home: undefined
    CardList: undefined
    Settings: undefined
    CreateCard: undefined
    CardDetails: undefined
}

export type SigninProps = {
    navigation: StackNavigationProp<ScreenParams, "Signin">
    route: RouteProp<ScreenParams, "Signin">
}

export type CreateCardProps = {
    navigation: StackNavigationProp<ScreenParams, "CreateCard">
    route: RouteProp<ScreenParams, "CreateCard">
}

export type CardDetailsProps = {
    navigation: StackNavigationProp<ScreenParams, "CardDetails">
    route: RouteProp<ScreenParams, "CardDetails">
}

export type TabNavigation = {
    navigation: StackNavigationProp<ScreenParams, "TabNavigation">
    route: RouteProp<ScreenParams, "TabNavigation">
}

export type HomeProps = {
    navigation: MaterialTopTabNavigationProp<ScreenParams, "Home">
    route: RouteProp<ScreenParams, "Home">
}

export type CardListProps = {
    navigation: MaterialTopTabNavigationProp<ScreenParams, "CardList">
    route: RouteProp<ScreenParams, "CardList">
}

export type SettingsProps = {
    navigation: MaterialTopTabNavigationProp<ScreenParams, "Settings">
    route: RouteProp<ScreenParams, "Settings">
}
