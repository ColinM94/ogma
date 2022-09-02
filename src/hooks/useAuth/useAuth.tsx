import * as React from "react"
import { User } from "types"
import { signIn, signOut, signUp } from "services"

interface AuthContextData {
  user?: User
  signIn: (email: string, password: string) => void
  signUp: (email: string, password: string) => void
  signOut: () => void
}

interface AuthProviderProps {
  children: React.ReactNode
}

const AuthContext = React.createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = React.useState()

  const handleSignIn = async (email: string, password: string) => {
    const user = await signIn(email, password)
    user ? setUser(user) : alert("Error signing in!")
  }

  const handleSignUp = async (email: string, password: string) => {
    const user = await signUp(email, password)
    user ? setUser(user) : alert("Error creating account!")
  }

  const handleSignOut = async () => {
    await signOut()
    setUser(undefined)
  }

  const data: AuthContextData = {
    user,
    signIn: handleSignIn,
    signUp: handleSignUp,
    signOut: handleSignOut,
  }

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
}

export const useAuth = (): AuthContextData => React.useContext(AuthContext)
