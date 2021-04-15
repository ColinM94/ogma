import * as React from "react"
import { auth, FirebaseUser } from "api/config"

const AuthContext = React.createContext<UseAuthProps | undefined>(undefined)
export const useAuth = () => {
    return React.useContext(AuthContext)
}

type AuthProviderProps = {
    children?: JSX.Element | JSX.Element[]
}

type UseAuthProps = {
    currentUser: FirebaseUser | null,
    isSignedIn: boolean
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [currentUser, setCurrentUser] = React.useState<FirebaseUser | null>(null)
    const [isSignedIn, setIsSignedIn] = React.useState(false)

    React.useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user)
            setIsSignedIn(user ? true : false)
        })

        return unsubscribe
    }, [])

    const value: UseAuthProps = {
        currentUser,
        isSignedIn
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}