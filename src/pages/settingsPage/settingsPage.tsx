import { Button, Card } from "components"
import { useAuth } from "hooks"
import { MainLayout } from "layouts"

import styles from "./styles.module.scss"

export const SettingsPage = () => {
  const { signOut } = useAuth()

  return (
    <MainLayout showNavbar label="Settings">
      <Card className={styles.card1}>
        <Card className={styles.card2}>
          <Card className={styles.card3} />
        </Card>
      </Card>
      <Button
        label="Sign Out"
        onClick={signOut}
        className={styles.signOutBtn}
      />
    </MainLayout>
  )
}
