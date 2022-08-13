import { db } from "inits/firebase"
import { collection, onSnapshot, query } from "firebase/firestore"
import { FlashCard } from "types/flashCard"

export const getFlashcardsSnapshot = async (
  callback: (cards: FlashCard[]) => void
) => {
  const collectionRef = collection(db, "cards")
  const q = query(collectionRef)

  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const flashcards: FlashCard[] = []

    querySnapshot.forEach((doc) => {
      const flashCard = {
        id: doc.id,
        ...doc.data(),
      } as FlashCard

      flashcards.push(flashCard)
    })

    callback(flashcards)
  })

  return unsubscribe
}
