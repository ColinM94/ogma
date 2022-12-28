import { Button } from "components"
import { ButtonOld } from "components/buttonOld/buttonOld"
import { useAuth } from "hooks"
import { MainLayout } from "layouts"

import styles from "./styles.module.scss"

export const SettingsPage = () => {
  const { signOut } = useAuth()

  return (
    <MainLayout showHeader showBackButton label="Settings">
      <ButtonOld
        label="Sign Out"
        onClick={signOut}
        className={styles.signOutBtn}
      />
    </MainLayout>
  )
}
