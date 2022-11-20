import { library } from "@fortawesome/fontawesome-svg-core"
import {
  faArrowLeft,
  faCog,
  faEllipsis,
  faHeart,
  faList,
  faMagnifyingGlass,
  faPencil,
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
    faHeart
  )
}
