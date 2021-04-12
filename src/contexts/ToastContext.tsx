import * as React from "react"
import { Alert, ToastAndroid, Platform } from "react-native"

type ProviderProps = {
    children?: JSX.Element | JSX.Element[],
}

type ContextProps = {
    showToast: (msg: string) => void
}

const ToastContext = React.createContext<ContextProps>({} as ContextProps)

export const useToast = () => {
    return React.useContext(ToastContext)
}

export const ToastProvider = ({ children }: ProviderProps) => {
    const showToast = (msg: string) => {
        if (Platform.OS === "android") {
            ToastAndroid.show(msg, ToastAndroid.SHORT)
        } else {
            Alert.alert(
                "Alert",
                msg,
                [
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
            );
        }
    }

    const value = {
        showToast,
    }

    return (
        <ToastContext.Provider value={value}>
            {children}
        </ToastContext.Provider>
    )
}



