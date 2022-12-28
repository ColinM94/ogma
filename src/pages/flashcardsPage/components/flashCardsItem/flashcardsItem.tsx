import * as React from "react"

import { Button, ButtonClickEvent, Card } from "components"
import { deleteFlashcard } from "services"
import { FlashCard } from "types"
import { classes } from "utils"

import styles from "./styles.module.scss"
import { ButtonOld } from "components/buttonOld/buttonOld"

interface FlashCardItemProps {
  item: FlashCard
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
      isConfirmed && deleteFlashcard(item.id)
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
        <ButtonOld
          icon={showMenu ? "xmark" : "ellipsis"}
          type="icon"
          onClick={(e) => handleMenuClick(e)}
          className={classes(
            styles.menuBtn,
            showMenu === true && styles.toggleBtnOpen,
            showMenu === false && styles.toggleBtnClose
          )}
        />
        {/* <ButtonOld
          type="icon"
          icon="xmark"
          onClick={(e) => {
            handleCloseMenuClick(e)
          }}
          className={styles.menuBtn}
        /> */}
        <ButtonOld
          type="icon"
          icon="trash"
          onClick={(e) => handleDelete(e)}
          className={styles.menuBtn}
        />
        <ButtonOld type="icon" icon="pencil" className={styles.menuBtn} />
        <ButtonOld
          type="icon"
          icon="heart"
          iconClassName={classes(liked && styles.heartBtnIcon)}
          className={styles.menuBtn}
          onClick={handleLikeClick}
        />
      </div>
    </Card>
  )
}
