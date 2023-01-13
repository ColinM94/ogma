import { Button } from "components"

import styles from "./styles.module.scss"

export const ComponentsPage = () => {
  return (
    <div className={styles.container}>
      <Button label="Button with Label" />

      <Button iconLeft="trash" label="Button with Label and Icon" />

      <Button iconLeft="trash" label="Button with Icon" />
    </div>
  )
}
