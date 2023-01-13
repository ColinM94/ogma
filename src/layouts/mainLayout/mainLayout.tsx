import { Outlet } from "react-router-dom"
import { Children } from "types"

import { Header, HeaderProps } from "./components/header/header"
import { Navbar } from "./components/navbar/navbar"

import styles from "./styles.module.scss"

interface Props extends HeaderProps {
  /** Toggle header, Defaults to false. */
  showHeader?: boolean
  /** Toggle navbar, defaults to false. */
  showNavbar?: boolean
  children?: Children
}

export const MainLayout = (props: Props) => {
  const {
    showHeader = false,
    showNavbar = true,
    showBackButton,
    showSettingsButton,
    label,
    children,
  } = props

  return (
    <>
      {showHeader && (
        <Header
          label={label}
          showBackButton={showBackButton}
          showSettingsButton={showSettingsButton}
          className={styles.header}
        />
      )}
      <div className={styles.content}>{children}</div>
      {showNavbar && <Navbar className={styles.navbar} />}
    </>
  )
}
