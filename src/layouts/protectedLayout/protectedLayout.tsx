import { Navigate, Outlet, useLocation } from "react-router-dom"

import { Header } from "./components/header/header"
import { Navbar } from "./components/navbar/navbar"

import styles from "./styles.module.scss"

export const ProtectedLayout = () => {
  const location = useLocation()

  if (location.pathname === "/") {
    return <Navigate to="flashcards" state={{ from: location }} replace />
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
