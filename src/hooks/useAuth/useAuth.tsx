import * as React from "react"
import { User } from "types"

interface AuthContextData {
  user?: User
}

interface AuthProviderProps {
  children: React.ReactNode
}

const AuthContext = React.createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = React.useState()

  const data: AuthContextData = {
    user,
  }

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
}

export const useAuth = (): AuthContextData => React.useContext(AuthContext)
