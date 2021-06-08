import * as React from "react"
import { LogBox } from "react-native"
import { library } from "@fortawesome/fontawesome-svg-core"
import {
    faArrowLeft,
    faArrowsAlt,
    faCog,
    faEye,
    faEyeSlash,
    faHome,
    faList,
    faPlus,
    faSeedling,
    faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons"
import { ThemeProvider } from "contexts/ThemeContext"
import { StatusBar } from "library/StatusBar"
import { LoadingProvider } from "contexts/LoadingContext"
import { ToastProvider } from "contexts/ToastContext"
import { AuthProvider } from "contexts/AuthContext"
import { Navigation } from "navigation/Navigation"

export const Main = () => {
    LogBox.ignoreLogs(["Setting a timer", "index.tsx", "Require cycle"])
    library.add(
        faEye,
        faEyeSlash,
        faSeedling,
        faSignOutAlt,
        faArrowsAlt,
        faHome,
        faCog,
        faPlus,
        faArrowLeft,
        faList
    )

    return (
        <LoadingProvider>
            <ToastProvider>
                <AuthProvider>
                    <ThemeProvider>
                        <Navigation />
                        <StatusBar />
                    </ThemeProvider>
                </AuthProvider>
            </ToastProvider>
        </LoadingProvider>
    )
}
