import { auth } from "./config"

export async function signUp(email: string, password: string) {
    await auth.createUserWithEmailAndPassword(email, password)
}

/** Attempts to sign user in using email and password.  */
export async function signIn(email: string, password: string) {
    await auth.signInWithEmailAndPassword(email, password)
}

/** Signs user out by ending Firebase auth session. */
export async function signOut() {
    await auth.signOut()
}

