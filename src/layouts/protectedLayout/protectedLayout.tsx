import { Navbar } from "components/navbar/navbar"
import { Outlet } from "react-router-dom"

import styles from "./styles.module.scss"

export const ProtectedLayout = () => {
  return (
    <>
      <div className={styles.content}>
        <Outlet />
      </div>
      <Navbar />
    </>
  )
}
