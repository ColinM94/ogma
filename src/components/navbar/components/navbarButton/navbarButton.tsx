import { useNavigate } from "react-router-dom"

import styles from "./styles.module.scss"

interface NavbarButtonProps {
  label: string
  page: string
}

export const NavbarButton = ({ label, page }: NavbarButtonProps) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(page)
  }

  return (
    <button onClick={handleClick} className={styles.container}>
      <div className={styles.label}>{label}</div>
    </button>
  )
}
