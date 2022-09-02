import { useNavigate } from "react-router-dom"
import { Button } from "components"
import styles from "./styles.module.scss"
import { useAuth } from "hooks"

interface HeaderProps {}

export const Header = ({}: HeaderProps) => {
  const navigate = useNavigate()
  const { signOut, user } = useAuth()

  const handleBackClick = () => {
    navigate(-1)
  }

  const handleAvatarClick = () => {
    signOut()
  }

  return (
    <div className={styles.container}>
      <Button
        icon="arrow-left"
        onClick={handleBackClick}
        className={styles.backBtn}
        type="icon"
      />
      <div>{user?.email}</div>
      <div className={styles.avatar} onClick={handleAvatarClick} />
    </div>
  )
}
