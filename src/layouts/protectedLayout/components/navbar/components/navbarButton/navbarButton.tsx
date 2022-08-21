import { useNavigate } from "react-router-dom"
import { IconProp } from "@fortawesome/fontawesome-svg-core"

import styles from "./styles.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface NavbarButtonProps {
  label?: string
  page: string
  icon: IconProp
}

export const NavbarButton = ({ label, page, icon }: NavbarButtonProps) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(page)
  }

  return (
    <button onClick={handleClick} className={styles.container}>
      {/* <div className={styles.label}>{label}</div> */}
      <FontAwesomeIcon icon={icon} className={styles.icon} />
    </button>
  )
}
