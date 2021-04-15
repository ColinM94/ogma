import * as React from "react"
import { StatusBar } from 'expo-status-bar'
import { LogBox } from "react-native"
import { enableScreens } from 'react-native-screens'

import { Navigation } from "navigation/Navigation"
import { ThemeProvider } from "contexts/ThemeContext"
import { ToastProvider } from "contexts/ToastContext"

import Constants from 'expo-constants';

// Icons.
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCog, faHome, faSearch, faThList, faPlus, faEllipsisV, faBars } from '@fortawesome/free-solid-svg-icons'
import { Home } from "screens/Home"
import { Header } from "library/Header"
library.add(faHome, faCog, faThList, faSearch, faPlus, faBars, faEllipsisV)

export const Main = () => {
    LogBox.ignoreLogs(['Setting a timer'])
    enableScreens() // https://reactnavigation.org/docs/react-native-screens/

    return (
        <ThemeProvider>
            <ToastProvider>
                <Navigation />
                <StatusBar style="light" translucent={false} />
            </ToastProvider>
        </ThemeProvider>
    )
}