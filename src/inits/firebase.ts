import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBQ3pL79TzzgGPW1xcwt_Yaf-1YTSbPqZE",
  authDomain: "ogma-dbc7f.firebaseapp.com",
  projectId: "ogma-dbc7f",
  storageBucket: "ogma-dbc7f.appspot.com",
  messagingSenderId: "107088163222",
  appId: "1:107088163222:web:97623098a48bb7a297edb7",
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)
