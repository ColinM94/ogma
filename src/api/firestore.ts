import { db } from "./config"

interface UserData {
    darkMode?: boolean
    dateFormat?: string
}

export async function addUser(userId: string) {
    await db.collection("users").doc(userId).set({})
}

export async function getUser(userId: string) {
    let doc = await db.collection("users").doc(userId).get()
    return doc.data()
}

export async function updateUser(userId: string, data: UserData) {
    await db.collection("users").doc(userId).update(data)
}

export async function addCard(card: FlashCardData, userId: string) {
    await db.collection("users").doc(userId).collection("cards").add(card)
}

/** Retrieves all cards from database. */
export async function getCards(userId: string) {
    const docs = await db.collection("users").doc(userId).collection("cards").get()

    const cards: FlashCardData[] = []
    docs.forEach((doc) => {
        const data = doc.data()
        data.id = doc.id
        cards.push(data as FlashCardData)
    })

    return cards
}

export async function deleteCard(userId: string, cardId: string) {
    await db.collection("users").doc(userId).collection("cards").doc(cardId).delete()
}
