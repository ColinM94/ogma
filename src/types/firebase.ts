import { WhereFilterOp } from "firebase/firestore"
import { KeyOf } from "./general"

export type FirestoreWhereGeneric<T> = [
  KeyOf<T>,
  WhereFilterOp,
  string | number | string[]
]

export type FirestoreCollectionName = "cards" | "users"
