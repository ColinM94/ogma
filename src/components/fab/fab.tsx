import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { HtmlButton } from "types/general"
import { classes } from "utils/classes"

import styles from "./styles.module.scss"

interface FABProps extends HtmlButton {
  icon: IconProp
}

export const FAB = ({ icon, className, ...rest }: FABProps) => {
  return (
    <button className={styles.button} {...rest}>
      {icon && <FontAwesomeIcon icon={icon} className={styles.icon} />}
    </button>
  )
}
