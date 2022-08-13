import { db } from "inits"
import { doc, deleteDoc } from "firebase/firestore"

export const deleteFlashcard = async (id: string) => {
  const docRef = doc(db, "cards", id)
  await deleteDoc(docRef)
}
