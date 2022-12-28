import { Button } from "components"
import { ButtonOld } from "components/buttonOld/buttonOld"

import styles from "./styles.module.scss"

export const ComponentsPage = () => {
  return (
    <div className={styles.container}>
      <ButtonOld label="Button with Label" />

      <ButtonOld icon="trash" label="Button with Label and Icon" />

      <ButtonOld icon="trash" label="Button with Icon" />
    </div>
  )
}
