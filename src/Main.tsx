import * as React from "react"
import { library } from "@fortawesome/fontawesome-svg-core"
import {
    faArrowLeft,
    faArrowsAlt,
    faCog,
    faEllipsisV,
    faEye,
    faEyeSlash,
    faHome,
    faList,
    faPaperclip,
    faPlus,
    faSearch,
    faSeedling,
    faSignOutAlt,
    faTrash,
} from "@fortawesome/free-solid-svg-icons"
import { ThemeProvider } from "contexts/ThemeContext"
import { StatusBar } from "library/StatusBar"
import { LoadingProvider } from "contexts/LoadingContext"
import { ToastProvider } from "contexts/ToastContext"
import { AuthProvider } from "contexts/AuthContext"
import { Navigation } from "navigation/Navigation"
import { LogBox } from "react-native"

export const Main = () => {
    LogBox.ignoreLogs(["Setting a timer"])

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
        faList,
        faPaperclip,
        faSearch,
        faEllipsisV,
        faTrash
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
