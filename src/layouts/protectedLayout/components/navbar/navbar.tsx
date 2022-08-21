import { useNavigate } from "react-router-dom"

import { NavbarButton } from "./components/navbarButton/navbarButton"
import styles from "./styles.module.scss"

interface NavbarProps {}

export const Navbar = ({}: NavbarProps) => {
  return (
    <div className={styles.container}>
      <NavbarButton icon="list" page="flashcards" />
      <NavbarButton icon="plus" page="creator" />
      <NavbarButton icon="cog" page="settings" />
    </div>
  )
}