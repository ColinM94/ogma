import { addDoc, collection } from "firebase/firestore"
import { db } from "inits"
import { FirestoreCollectionName } from "types/firebase"

export const addDocument = async (
  collectionName: FirestoreCollectionName,
  data: object
) => {
  try {
    await addDoc(collection(db, collectionName), data)
    return true
  } catch (error) {
    console.error("addDocToCollection", error)
    return false
  }
}
