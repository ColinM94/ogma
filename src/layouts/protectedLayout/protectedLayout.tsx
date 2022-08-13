import { Navbar } from "components/navbar/navbar"
import { Navigate, Outlet, useLocation } from "react-router-dom"

import styles from "./styles.module.scss"

export const ProtectedLayout = () => {
  const location = useLocation()

  if (location.pathname === "/") {
    return <Navigate to="flashcards" state={{ from: location }} replace />
  }

  return (
    <>
      <div className={styles.content}>
        <Outlet />
      </div>
      <Navbar />
    </>
  )
}
