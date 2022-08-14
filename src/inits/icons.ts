import { library } from "@fortawesome/fontawesome-svg-core"
import {
  faArrowLeft,
  faCog,
  faList,
  faMagnifyingGlass,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons"

export const initIconsLibrary = () => {
  library.add(faList, faCog, faPlus, faTrash, faMagnifyingGlass, faArrowLeft)
}
