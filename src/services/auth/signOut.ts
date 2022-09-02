import { AuthError, signOut as firebaseSignOut } from "firebase/auth"
import { auth } from "inits"

export const signOut = async () => {
  try {
    await firebaseSignOut(auth)
  } catch (error) {
    const e = error as AuthError
    console.log(e.message)
  }
}
