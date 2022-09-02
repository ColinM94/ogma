import * as React from "react"
import { Button, Card, InputText } from "components"

import styles from "./styles.module.scss"
import { useAuth } from "hooks"
import { FirebaseError } from "firebase/app"
import { AuthError } from "firebase/auth"

export const LoginPage = () => {
  const { signIn, signUp } = useAuth()
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")

  const handleSignIn = async () => {
    signIn(email, password)
  }

  const handleSignUp = async () => {
    signUp(email, password)
  }

  return (
    <Card className={styles.card}>
      <InputText value={email} setValue={setEmail} type="email" />
      <InputText value={password} setValue={setPassword} type="password" />
      <Button
        label="Sign In"
        className={styles.loginBtn}
        onClick={handleSignIn}
      />
      <Button
        label="Sign Up"
        className={styles.loginBtn}
        onClick={handleSignUp}
      />
    </Card>
  )
}
