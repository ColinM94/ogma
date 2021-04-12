import * as React from "react"
import { StatusBar } from 'expo-status-bar'
import { LogBox } from "react-native"
import { enableScreens } from 'react-native-screens'

import { Navigation } from "navigation/Navigation"
import { ThemeProvider } from "contexts/ThemeContext"
import { ToastProvider } from "contexts/ToastContext"

// Icons.
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCog, faHome, faSearch, faThList, faPlus } from '@fortawesome/free-solid-svg-icons'
library.add(faHome, faCog, faThList, faSearch, faPlus)

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