import { useNavigate } from "react-router-dom"

import { Button } from "components/button/button"

import styles from "./styles.module.scss"

export const Header = () => {
  const navigate = useNavigate()

  return (
    <div className={styles.container}>
      <Button
        label="Home"
        onClick={() => navigate("home")}
        className={styles.navBtn}
      >
        Home
      </Button>
      <Button
        label="Settings"
        onClick={() => navigate("settings")}
        className={styles.navBtn}
      >
        Settings
      </Button>
    </div>
  )
}
