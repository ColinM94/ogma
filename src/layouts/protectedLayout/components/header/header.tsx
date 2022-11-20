import { useNavigate } from "react-router-dom"

import { classes } from "utils"
import { Button } from "components"
import { useAuth } from "hooks"

import styles from "./styles.module.scss"

interface HeaderProps {
  className: string
}

export const Header = ({ className }: HeaderProps) => {
  const navigate = useNavigate()
  const { signOut, user } = useAuth()

  const handleBackClick = () => {
    navigate(-1)
  }

  const handleAvatarClick = () => {
    signOut()
  }

  return (
    <div className={classes(styles.container, className)}>
      <Button
        icon="arrow-left"
        onClick={handleBackClick}
        className={styles.backBtn}
        type="icon"
      />
      {/* <div>{user?.email}</div> */}
      {/* <div className={styles.avatar} onClick={handleAvatarClick} /> */}
    </div>
  )
}
