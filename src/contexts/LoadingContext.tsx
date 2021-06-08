import * as React from "react"
import { StyleSheet, ActivityIndicator } from "react-native"

type LoadingProviderProps = {
    children?: React.ReactNode | React.ReactNode[]
}

interface State {
    //** While true shows a loading spinner at the center of the screen. */
    loading: (show: boolean) => void
}

export const LoadingContext = React.createContext({} as State)

export const useLoading = (): State => {
    return React.useContext(LoadingContext)
}

export const LoadingProvider = ({ children }: LoadingProviderProps) => {
    const [isLoading, setIsLoading] = React.useState(false)

    const loading = (active: boolean) => {
        setIsLoading(active)
    }

    const value: State = {
        loading,
    }

    return (
        <LoadingContext.Provider value={value}>
            {children}
            {isLoading && (
                <ActivityIndicator size="large" color="red" style={styles.loading} />
            )}
        </LoadingContext.Provider>
    )
}

const styles = StyleSheet.create({
    loading: {
        position: "absolute",
        top: "45%",
        left: "50%",
        right: "50%",
    },
})
