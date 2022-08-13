import { doc, getDoc } from "firebase/firestore"
import { db } from "inits"
import { FlashCard } from "types"

export const getFlashcard = async (id: string) => {
  const docRef = doc(db, "cards", id)
  const docSnap = await getDoc(docRef)

  const flashCard = {
    ...docSnap.data(),
    id: docSnap.id,
  } as FlashCard

  return flashCard
}
