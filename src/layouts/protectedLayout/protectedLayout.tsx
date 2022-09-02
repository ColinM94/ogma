import { useAuth } from "hooks"
import { LoginPage } from "pages"
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom"

import { Header } from "./components/header/header"
import { Navbar } from "./components/navbar/navbar"

import styles from "./styles.module.scss"

export const ProtectedLayout = () => {
  const { pathname } = useLocation()
  const { user } = useAuth()

  if (!user) {
    return <LoginPage />
  }

  return (
    <>
      <Header />
      <div className={styles.content}>
        <Outlet />
      </div>
      {/* <Navbar /> */}
    </>
  )
}
