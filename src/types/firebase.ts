import type { WhereFilterOp } from 'firebase/firestore';
import type { KeyOf } from './general';

export type FirestoreWhereGeneric<T> = [KeyOf<T>, WhereFilterOp, string | number | string[]];

export type FirestoreCollection = 'cards' | 'users';
