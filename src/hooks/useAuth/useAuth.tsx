import * as React from "react"
import { User } from "types"
import { signIn, signOut, signUp } from "services"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "inits"

interface AuthContextData {
  user?: User
  signOut: () => void
}

interface AuthProviderProps {
  children: React.ReactNode
}

const AuthContext = React.createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = React.useState<User>()

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      console.log(firebaseUser)
      if (firebaseUser) {
        setUser({ email: firebaseUser.email || "" })
      } else {
        setUser(undefined)
      }
    })

    return () => unsubscribe()
  }, [])

  const handleSignOut = async () => {
    await signOut()
    setUser(undefined)
  }

  const data: AuthContextData = {
    user,
    signOut: handleSignOut,
  }

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
}

export const useAuth = (): AuthContextData => React.useContext(AuthContext)
