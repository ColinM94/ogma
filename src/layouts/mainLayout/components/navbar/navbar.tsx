import { classes } from "utils"

import { NavbarButton } from "./components/navbarButton/navbarButton"
import styles from "./styles.module.scss"

interface NavbarProps {
  className: string
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classes(styles.container, className)}>
      <NavbarButton icon="house" page="home" className={styles.button} />
      <NavbarButton icon="list" page="flashcards" className={styles.button} />
      <NavbarButton icon="cog" page="settings" className={styles.button} />
    </div>
  )
}
