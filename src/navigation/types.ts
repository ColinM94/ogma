import { MaterialTopTabNavigationProp } from "@react-navigation/material-top-tabs"
import { RouteProp } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"

// Param types for each screen. 
export type ScreenParams = {
    Tab: undefined,
    Home: undefined,
    CardList: undefined,
    Study: undefined,
    CardDetails: { item: FlashCard },
    Settings: undefined,
    CreateCard: undefined
}

export type HomeProps = {
    navigation: MaterialTopTabNavigationProp<ScreenParams, 'Home'>,
    route: RouteProp<ScreenParams, 'Home'>
}

export type CardListProps = {
    navigation: MaterialTopTabNavigationProp<ScreenParams, 'CardList'>,
    route: RouteProp<ScreenParams, 'CardList'>
}

export type SettingsProps = {
    navigation: MaterialTopTabNavigationProp<ScreenParams, 'Settings'>,
    route: RouteProp<ScreenParams, 'Settings'>
}

export type StudyProps = {
    navigation: StackNavigationProp<ScreenParams, 'Study'>,
    route: RouteProp<ScreenParams, 'Study'>
}

export type CardDetailsProps = {
    navigation: StackNavigationProp<ScreenParams, 'CardDetails'>,
    route: RouteProp<ScreenParams, 'CardDetails'>
}

export type CreateCardProps = {
    navigation: StackNavigationProp<ScreenParams, 'CreateCard'>,
    route: RouteProp<ScreenParams, 'CreateCard'>
}

