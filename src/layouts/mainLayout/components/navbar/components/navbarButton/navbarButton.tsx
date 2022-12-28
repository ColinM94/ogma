import { useNavigate } from "react-router-dom"
import { IconProp } from "@fortawesome/fontawesome-svg-core"

import styles from "./styles.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ButtonOld } from "components/buttonOld/buttonOld"

interface NavbarButtonProps {
  label?: string
  page: string
  icon: IconProp
}

export const NavbarButton = ({ label, page, icon }: NavbarButtonProps) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/${page}`)
  }

  return (
    <ButtonOld onClick={handleClick} className={styles.container}>
      {/* <div className={styles.label}>{label}</div> */}
      <FontAwesomeIcon icon={icon} className={styles.icon} />
    </ButtonOld>
  )
}
