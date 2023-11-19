import { getDoc, doc } from 'firebase/firestore';
import { db } from 'inits';
import { FirestoreCollection } from 'types';

interface Config {
  collection: FirestoreCollection;
  id: string;
}

export const getDocument = async <T>(config: Config) => {
  const { collection: collectionName } = config;

  try {
    const document = await getDoc(doc(db, collectionName, config.id));

    if (!document.exists()) return undefined;

    return { ...document.data(), id: document.id } as T;
  } catch (error) {
    console.log(error, `getDocument ${config.id} from ${collectionName} `);
    return undefined;
  }
};
