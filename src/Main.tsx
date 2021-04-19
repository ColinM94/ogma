import * as React from "react"
import { StatusBar } from 'expo-status-bar'
import { LogBox } from "react-native"
import { enableScreens } from 'react-native-screens'

import { Navigation } from "navigation/Navigation"
import { ThemeProvider } from "contexts/ThemeContext"
import { ToastProvider } from "contexts/ToastContext"
import { AuthProvider } from "contexts/AuthContext"

// Icons.
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCog, faHome, faSearch, faThList, faPlus, faEllipsisV, faBars, faSignOutAlt, faLightbulb, faSun, faMoon, faSquare, faCheckSquare, faTimes, faCheck, faUser, faLock, faEye, faEnvelopeSquare, faEnvelope, faCalendar } from '@fortawesome/free-solid-svg-icons'
import { LoadingProvider } from "contexts/LoadingContext"
library.add(faEnvelope, faHome, faCog, faThList, faSearch, faPlus, faBars, faEllipsisV, faSignOutAlt, faLightbulb, faSun, faMoon, faSquare, faCheckSquare, faTimes, faCheck, faUser, faLock, faEye, faCalendar)

export const Main = () => {
    LogBox.ignoreLogs(['Setting a timer'])
    enableScreens() // https://reactnavigation.org/docs/react-native-screens/

    return (
        <ThemeProvider>
            <LoadingProvider>
                <AuthProvider>
                    <ToastProvider>
                        <Navigation />
                        <StatusBar style="light" translucent={false} />
                    </ToastProvider>
                </AuthProvider>
            </LoadingProvider>
        </ThemeProvider>
    )
}