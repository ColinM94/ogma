import * as React from "react"

import { Button, Card } from "components"
import { ButtonClickEvent, FlashCardInfo } from "types"
import { classes } from "utils"
import { deleteDocument } from "services"

import styles from "./styles.module.scss"

interface FlashCardItemProps {
  item: FlashCardInfo
  onClick: () => void
  className?: string
}

export const FlashCardsItem = (props: FlashCardItemProps) => {
  const { item, onClick, className } = props

  const [showMenu, setShowMenu] = React.useState()
  const [liked, setLiked] = React.useState(false)

  const handleDelete = (e: React.MouseEvent) => {
    try {
      e.stopPropagation()
      const isConfirmed = confirm("Are you sure?")
      isConfirmed && deleteDocument("cards", item.id)
    } catch (error) {
      console.log(error)
    }
  }

  const handleMenuClick = (e: ButtonClickEvent) => {
    e.stopPropagation()
    // TODO: Remove Any
    setShowMenu((prev) => !Boolean(prev) as any)
  }

  // const handleCloseMenuClick = (e: ButtonClickEvent) => {
  //   e.stopPropagation()
  //   setShowMenu(false)
  // }

  const handleLikeClick = (e: ButtonClickEvent) => {
    e.stopPropagation()
    setLiked((prev) => !prev)
  }

  return (
    <Card
      key={item.id}
      className={classes(styles.container, className)}
      onClick={onClick}
    >
      <div className={styles.info}>
        {/* <div className={styles.colorTag} /> */}

        <div className={styles.front}>{item.front}</div>
        <div className={styles.back}>{item.back}</div>
      </div>

      <div
        className={classes(
          styles.menu,
          showMenu === true && styles.menuVisible,
          showMenu === false && styles.menuInvisible
        )}
      >
        <Button
          iconLeft={showMenu ? "xmark" : "ellipsis"}
          type="icon"
          onClick={(e) => handleMenuClick(e)}
          className={classes(
            styles.menuBtn,
            showMenu === true && styles.toggleBtnOpen,
            showMenu === false && styles.toggleBtnClose
          )}
        />

        <Button
          iconLeft="trash"
          type="icon"
          onClick={(e) => handleDelete(e)}
          className={styles.menuBtn}
        />

        <Button iconLeft="pencil" type="icon" className={styles.menuBtn} />

        <Button
          iconLeft="heart"
          type="icon"
          iconClassName={classes(liked && styles.heartBtnIcon)}
          className={styles.menuBtn}
          onClick={handleLikeClick}
        />
      </div>
    </Card>
  )
}
