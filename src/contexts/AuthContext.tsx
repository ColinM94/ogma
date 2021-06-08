import * as React from "react"
import { auth } from "api/config"
import { getUser } from "api/firestore"

interface CurrentUser {
    id: string | null
    email: string | null
    isSignedIn: boolean
    darkMode: boolean
    dateFormat: string
}

type AuthProviderProps = {
    children?: React.ReactNode | React.ReactNode[]
}

interface State {
    currentUser: CurrentUser
}

const initialState: State = {
    currentUser: {
        id: null,
        email: null,
        isSignedIn: false,
        darkMode: true,
        dateFormat: "DD/MM/YY",
    },
}

export const AuthContext = React.createContext({} as State)

export const useAuth = (): State => {
    return React.useContext(AuthContext)
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [currentUser, setCurrentUser] = React.useState(initialState.currentUser)

    React.useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                getUser(user.uid).then((userData) => {
                    setCurrentUser({
                        id: user.uid,
                        email: user.email,
                        isSignedIn: true,
                        darkMode: userData?.darkMode ?? initialState.currentUser.darkMode,
                        dateFormat:
                            userData?.dateFormat ?? initialState.currentUser.dateFormat,
                    })
                })
            } else {
                setCurrentUser(initialState.currentUser)
            }
        })
        return () => unsubscribe()
    }, [])

    const value: State = {
        currentUser,
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
