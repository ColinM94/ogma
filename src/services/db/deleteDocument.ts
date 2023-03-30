import { db } from "inits"
import { doc, deleteDoc } from "firebase/firestore"
import { FirestoreCollectionName } from "types/firebase"

export const deleteDocument = async (
  collectionName: FirestoreCollectionName,
  id: string
) => {
  try {
    const docRef = doc(db, collectionName, id)
    await deleteDoc(docRef)
  } catch (error) {
    console.error(error)
  }
}
