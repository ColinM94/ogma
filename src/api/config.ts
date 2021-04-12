// The core firebase client.
import firebase from 'firebase/app'

// Importing the required individual services. 
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

export const app = firebase.initializeApp({
    apiKey: "AIzaSyBQ3pL79TzzgGPW1xcwt_Yaf-1YTSbPqZE",
    authDomain: "ogma-dbc7f.firebaseapp.com",
    projectId: "ogma-dbc7f",
    storageBucket: "ogma-dbc7f.appspot.com",
    messagingSenderId: "107088163222",
    appId: "1:107088163222:web:97623098a48bb7a297edb7"
})

export const auth = firebase.auth()
export const db = firebase.firestore()
export const storage = firebase.storage()

// Types
export type Doc = firebase.firestore.DocumentSnapshot
export type DocData = firebase.firestore.DocumentData | undefined