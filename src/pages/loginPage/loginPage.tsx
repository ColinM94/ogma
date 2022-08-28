import { Button, Card } from "components"

import styles from "./styles.module.scss"

export const LoginPage = () => {
  return (
    <Card className={styles.card}>
      <Button label="Login" className={styles.loginBtn} />
    </Card>
  )
}
