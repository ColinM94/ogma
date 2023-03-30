import {
  getDocs,
  query,
  where,
  collection,
  QueryConstraint,
} from "firebase/firestore"
import { db } from "inits"
import { FirestoreCollectionName, FirestoreWhereGeneric } from "types/firebase"

interface Config<T> {
  /** Name of Firestore collection. */
  collection: FirestoreCollectionName
  /** Array of where clauses e.g. ["userId", "==", "12345", "userId", "==", "54321"] */
  where?: FirestoreWhereGeneric<T>[]
}

export const getDocuments = async <T>(config: Config<T>) => {
  const { collection: collectionName, where: whereClauses } = config

  try {
    const conditions: QueryConstraint[] = []

    whereClauses?.forEach((whereClause) => {
      const newWhere = where(whereClause[0], whereClause[1], whereClause[2])
      conditions.push(newWhere)
    })

    const q = query(collection(db, collectionName), ...conditions)

    const querySnapshot = await getDocs(q)

    const items: T[] = []

    querySnapshot.forEach((doc) => {
      items.push({ ...(doc.id && { id: doc.id }), ...doc.data() } as T)
    })

    return items
  } catch (error) {
    console.error(error)
    return []
  }
}
