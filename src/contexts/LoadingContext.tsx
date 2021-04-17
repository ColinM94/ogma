import * as React from "react"
import { ActivityIndicator, StyleSheet } from "react-native"

type LoadingProviderProps = {
    children: JSX.Element | JSX.Element[]
}

type Value = {
    loading: (active: boolean) => void,
}

const LoadingContext = React.createContext<Value>({} as Value)

export const useLoading = () => {
    return React.useContext(LoadingContext)
}

export const LoadingProvider = ({ children }: LoadingProviderProps) => {
    const [isLoading, setIsLoading] = React.useState(false)

    const loading = (active: boolean) => {
        setIsLoading(active)
    }

    const value: Value = {
        loading
    }

    const styles = StyleSheet.create({
        loading: {
            position: 'absolute',
            top: "45%",
            left: "50%",
            right: "50%",
        }
    })

    return (
        <LoadingContext.Provider value={value}>
            {children}
            {isLoading && <ActivityIndicator size="large" color="red" style={styles.loading} />}
        </LoadingContext.Provider>
    )
}

