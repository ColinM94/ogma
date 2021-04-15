import { db, FirestoreDoc, FirestoreDocData } from "./config"
import { FlashCardData } from "common/types"

/** Converts a Firebase document into a FlashCardData object. */
function docToCard(doc: FirestoreDoc): FlashCardData {
    let data: FirestoreDocData = doc.data()

    let card = {
        id: doc.id,
        front: {
            title: data?.front.title,
            subtitle: data?.front.subtitle,
        },
        back: {
            title: data?.back.title,
            subtitle: data?.back.subtitle
        },
        category: data?.category,
        dateCreated: data?.dateCreated.toDate()
    }

    return card
}

export async function addCard(card: FlashCardData) {
    await db.collection("cards").add(card)
}

/** Retrieves all cards from database. */
export async function getCards() {
    const docs = await db.collection("cards").get()

    if (docs.empty) return null

    const cards: FlashCardData[] = []
    docs.forEach(doc => {
        cards.push(docToCard(doc))
    })

    return cards
}