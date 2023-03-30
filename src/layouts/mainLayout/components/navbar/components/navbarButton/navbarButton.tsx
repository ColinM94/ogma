import { useNavigate } from "react-router-dom"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { ClassName } from "types"

import styles from "./styles.module.scss"

interface NavbarButtonProps {
  // label?: string
  page: string
  icon: IconProp
  className: ClassName
}

export const NavbarButton = ({ page, icon }: NavbarButtonProps) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/${page}`)
  }

  return (
    <div onClick={handleClick} className={styles.container}>
      <FontAwesomeIcon icon={icon} className={styles.icon} />
    </div>
  )
}
