import { Button } from "components"

import styles from "./styles.module.scss"

export const ComponentsPage = () => {
  return (
    <div className={styles.container}>
      <Button label="Button with Label" />

      <Button icon="trash" label="Button with Label and Icon" />

      <Button icon="trash" label="Button with Icon" />
    </div>
  )
}
