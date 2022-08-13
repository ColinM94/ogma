import { db } from "inits"
import { doc, deleteDoc } from "firebase/firestore"

export const deleteFlashCard = async (id: string) => {
  const docRef = doc(db, "cards", id)
  await deleteDoc(docRef)
}
