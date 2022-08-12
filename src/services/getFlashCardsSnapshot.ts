import { db } from "config/firebase"
import { collection, onSnapshot, query } from "firebase/firestore"
import { FlashCard } from "types/flashCard"

export const getCardsSnapshot = async (
  callback: (cards: FlashCard[]) => void
) => {
  const collectionRef = collection(db, "cards")
  const q = query(collectionRef)

  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const flashCards: FlashCard[] = []

    querySnapshot.forEach((doc) => {
      const flashCard = {
        id: doc.id,
        ...doc.data(),
      } as FlashCard

      flashCards.push(flashCard)
    })

    callback(flashCards)
  })

  return unsubscribe
}
