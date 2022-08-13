import { useNavigate } from "react-router-dom"

import { NavbarButton } from "./components/navbarButton/navbarButton"
import styles from "./styles.module.scss"

interface NavbarProps {}

export const Navbar = ({}: NavbarProps) => {
  const navigate = useNavigate()

  const handleClick = (route: string) => {
    navigate(route)
  }

  return (
    <div className={styles.container}>
      <NavbarButton label="Cards" page="flashcards" />
      <NavbarButton label="Add" page="creator" />
      <NavbarButton label="Settings" page="settings" />
    </div>
  )
}
