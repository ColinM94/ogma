import { db } from "inits/firebase"
import { collection, onSnapshot, query } from "firebase/firestore"
import { FirestoreCollectionName } from "types/firebase"

export const getDocumentsSnapshot = <T>(
  collectionName: FirestoreCollectionName,
  callback: (cards: T[]) => void
) => {
  const collectionRef = collection(db, collectionName)
  const q = query(collectionRef)

  return onSnapshot(q, (querySnapshot) => {
    const items: T[] = []

    querySnapshot.forEach((doc) => {
      const item = {
        id: doc.id,
        ...doc.data(),
      } as T

      items.push(item)
    })

    callback(items)
  })
}
