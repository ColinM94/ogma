import { db, Doc, DocData } from "./config"

function docToCard(doc: Doc) {
    let data: DocData = doc.data()

    let card: FlashCard = {
        id: doc.id,
        english: data?.english,
        german: data?.german,
        dateCreated: data?.dateCreated.toDate(),
        category: data?.category
    }

    return card
}

export async function addCard(card: FlashCard) {
    await db.collection("cards").add(card)
}

export async function getCards() {
    const docs = await db.collection("cards").get()
    let cards: FlashCard[] = []

    docs.forEach(doc => {
        cards.push(docToCard(doc))
    })

    return cards
}