import { Button } from "components"
import { MainLayout } from "layouts"
import { useNavigate } from "react-router-dom"

import styles from "./styles.module.scss"

export const HomePage = () => {
  const navigate = useNavigate()

  return (
    <MainLayout showNavbar showBackButton label="Home">
      {/* <div className={styles.card}>
        <div>Study</div>
      </div> */}
      <Button
        label="Study"
        iconRight="play"
        onClick={() => navigate("/study")}
      />
    </MainLayout>
  )
}
