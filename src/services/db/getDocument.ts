import { doc, getDoc } from "firebase/firestore"
import { db } from "inits"
import { FirestoreCollectionName } from "types/firebase"

export const getDocument = async <T>(
  collectionName: FirestoreCollectionName,
  id: string
) => {
  const docRef = doc(db, collectionName, id)
  const docSnap = await getDoc(docRef)

  const item = {
    ...docSnap.data(),
    id: docSnap.id,
  } as T

  return item
}
