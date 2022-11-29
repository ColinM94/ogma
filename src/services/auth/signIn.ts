import { AuthError, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "inits"
import { User } from "types"

export const signIn = async (email: string, password: string) => {
  try {
    const credential = await signInWithEmailAndPassword(auth, email, password)

    const user: User | any = {
      email: credential.user.email,
    }

    return user
  } catch (error) {
    const e = error as AuthError
    alert(e)
  }
}
