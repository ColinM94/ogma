import { db, Doc, DocData } from "./config"

function docToCard(doc: Doc) {
    let data: DocData = doc.data()

    let card = {
        id: doc.id,
        frontTitle: data?.frontTitle,
        frontSubtitle: data?.frontSubtitle,
        backTitle: data?.backTitle,
        backSubtitle: data?.backSubtitle,
        category: data?.category,
        dateCreated: data?.dateCreated.toDate()
    }

    return card
}

export async function addCard(frontTitle: string, frontSubtitle: string, backTitle: string, backSubtitle: string, category: string) {
    await db.collection("cards").add({
        frontTitle,
        frontSubtitle,
        backTitle,
        backSubtitle,
        category,
        dateCreated: new Date()
    })
}

export async function getCards() {
    const docs = await db.collection("cards").get()
    let cards = []

    docs.forEach(doc => {
        cards.push(docToCard(doc))
    })

    return cards
}