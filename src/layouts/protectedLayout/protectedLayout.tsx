import { useAuth } from "hooks"
import { Navigate, Outlet } from "react-router-dom"

import { Header } from "./components/header/header"
import { Navbar } from "./components/navbar/navbar"

import styles from "./styles.module.scss"

export const ProtectedLayout = () => {
  const { user } = useAuth()

  if (!user) return <Navigate to="/login" />

  return (
    <>
      {/* <Header className={styles.header} /> */}
      <div className={styles.content}>
        <Outlet />
      </div>
      <Navbar className={styles.navbar} />
    </>
  )
}
