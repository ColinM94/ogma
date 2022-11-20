import { Button } from "components"
import { useAuth } from "hooks"

import styles from "./styles.module.scss"

export const SettingsPage = () => {
  const { signOut } = useAuth()

  return (
    <>
      <h1>Settings</h1>
      <Button
        label="Sign Out"
        onClick={signOut}
        className={styles.signOutBtn}
      />
    </>
  )
}
