import { auth } from "./config"
import { addUser } from "./firestore"

/** Attempts to sign user in using email and password.  */
export async function signIn(email: string, password: string) {
    await auth.signInWithEmailAndPassword(email, password)
}

export async function signUp(email: string, password: string) {
    const userCredential = await auth.createUserWithEmailAndPassword(email, password)
    await addUser(userCredential.user.uid)
}

export async function sendResetPasswordEmail(email: string) {
    await auth.sendPasswordResetEmail(email)
}

/** Signs user out by ending Firebase auth session. */
export async function signOut() {
    await auth.signOut()
}

