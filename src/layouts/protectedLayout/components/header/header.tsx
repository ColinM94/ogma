import { useNavigate } from "react-router-dom"
import { Button } from "components"
import styles from "./styles.module.scss"

interface HeaderProps {}

export const Header = ({}: HeaderProps) => {
  const navigate = useNavigate()

  const handleBackClick = () => {
    navigate(-1)
  }

  return (
    <div className={styles.container}>
      <Button
        icon="arrow-left"
        onClick={handleBackClick}
        className={styles.backBtn}
        type="icon"
      />
    </div>
  )
}
