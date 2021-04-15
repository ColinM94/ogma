import { db, Doc, DocData } from "./config"
import { FlashCard } from "common/types"

function docToCard(doc: Doc) {
    let data: DocData = doc.data()

    if (!data) return

    let card = {
        id: doc.id,
        front: {
            title: data.front.title,
            subtitle: data.front.subtitle,
        },
        back: {
            title: data.back.title,
            subtitle: data.back.subtitle
        },
        category: data?.category,
        dateCreated: data?.dateCreated.toDate()
    }

    return card
}

export async function addCard(frontTitle: string, frontSubtitle: string, backTitle: string, backSubtitle: string, category: string) {
    await db.collection("cards").add({
        front: {
            title: frontTitle,
            subtitle: frontSubtitle,
        },
        back: {
            title: backTitle,
            subtitle: backSubtitle
        },
        category,
        dateCreated: new Date()
    })
}

export async function getCards() {
    const docs = await db.collection("cards").get()
    let cards: FlashCard = []

    docs.forEach(doc => {
        cards.push(docToCard(doc))
    })

    return cards
}