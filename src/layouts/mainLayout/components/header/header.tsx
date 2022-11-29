import { useNavigate } from "react-router-dom"

import { classes } from "utils"
import { Button } from "components"
import { useAuth } from "hooks"

import styles from "./styles.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export interface HeaderProps {
  className?: string
  /** Toggle back button. Defaults to false. */
  showBackButton?: boolean
  /** Toggle settings button. Defaults to false. */
  showSettingsButton?: boolean
  label?: string
}

export const Header = (props: HeaderProps) => {
  const {
    className,
    showBackButton = false,
    showSettingsButton = false,
    label,
  } = props

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
      {showBackButton && (
        <Button
          icon="arrow-left"
          onClick={handleBackClick}
          className={styles.backBtn}
          type="icon"
        />
      )}
      <div className={styles.label}>{label}</div>
      {showSettingsButton && (
        <Button
          type="icon"
          icon="cog"
          onClick={() => navigate("/settings")}
          className={styles.settingsBtn}
        />
      )}
      {/* <div>{user?.email}</div> */}
      {/* <div className={styles.avatar} onClick={handleAvatarClick} /> */}
    </div>
  )
}
