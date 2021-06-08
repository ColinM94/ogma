import * as React from "react"
import { Alert, Platform, ToastAndroid } from "react-native"

interface ToastProviderProps {
    children?: React.ReactNode | React.ReactNode[]
}

interface ToastState {
    toast: (msg: string) => void
}

const ToastContext = React.createContext({} as ToastState)

export const useToast = () => {
    return React.useContext(ToastContext)
}

export const ToastProvider = ({ children }: ToastProviderProps) => {
    const toast = (msg: string) => {
        if (Platform.OS === "android") {
            ToastAndroid.show(msg, ToastAndroid.SHORT)
        } else {
            Alert.alert("Alert", msg, [
                { text: "OK", onPress: () => console.log("OK Pressed") },
            ])
        }
    }

    const value: ToastState = {
        toast,
    }

    return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
}
