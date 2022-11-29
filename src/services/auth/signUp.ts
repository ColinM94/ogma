import { AuthError, createUserWithEmailAndPassword, User } from "firebase/auth"
import { auth } from "inits"

export const signUp = async (email: string, password: string) => {
  try {
    const credential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    )

    // TODO: Remove any
    const user: User | any = {
      email: credential.user.email,
    }

    return user
  } catch (error) {
    const e = error as AuthError
    console.log(e.message)
  }
}
