import { Button } from "components"
import { useAuth } from "hooks"
import { MainLayout } from "layouts"

import styles from "./styles.module.scss"

export const SettingsPage = () => {
  const { signOut } = useAuth()

  return (
    <MainLayout showHeader showBackButton label="Settings">
      <Button
        label="Sign Out"
        onClick={signOut}
        className={styles.signOutBtn}
      />
    </MainLayout>
  )
}
