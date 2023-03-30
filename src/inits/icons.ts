import { library } from "@fortawesome/fontawesome-svg-core"
import {
  faArrowDown,
  faArrowLeft,
  faArrowUp,
  faCog,
  faEllipsis,
  faFilter,
  faHeart,
  faHouse,
  faList,
  faMagnifyingGlass,
  faPencil,
  faPlay,
  faPlus,
  faTrash,
  faXmark,
} from "@fortawesome/free-solid-svg-icons"

export const initIconsLibrary = () => {
  library.add(
    faList,
    faCog,
    faPlus,
    faTrash,
    faMagnifyingGlass,
    faArrowLeft,
    faEllipsis,
    faPencil,
    faXmark,
    faHeart,
    faArrowDown,
    faArrowUp,
    faFilter,
    faHouse,
    faPlay
  )
}
