import { addDoc, collection } from "firebase/firestore"
import { db } from "inits/firebase"
import { FlashCard } from "types/flashCard"

export const addFlashCard = async (flashCard: Omit<FlashCard, "id">) => {
  return await addDoc(collection(db, "cards"), flashCard)
}
