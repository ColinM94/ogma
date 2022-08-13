import { addDoc, collection } from "firebase/firestore"
import { db } from "config/firebase"
import { FlashCard } from "types/flashCard"

export const addFlashCard = async (flashCard: FlashCard) => {
  return await addDoc(collection(db, "cards"), flashCard)
}
