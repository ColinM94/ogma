import { db, FirestoreDoc, FirestoreDocData } from "./config"
import { EventInfo } from "src/common/types"

// Convert firebase docs to objects.
export function docToEventInfo(doc: FirestoreDoc) {
    let data: FirestoreDocData = doc.data()

    let event: EventInfo = {
        id: doc.id,
        name: data?.name,
        date: data?.date.toDate(),
        color: data?.color,
    }

    return event
}

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

// Event.
export async function addEvent(userId: string, eventInfo: EventInfo) {
    await db.collection("users").doc(userId).collection("events").add(eventInfo)
}

export async function getEvent(userId: string, eventId: string) {
    let doc = await db
        .collection("users")
        .doc(userId)
        .collection("events")
        .doc(eventId)
        .get()

    if (!doc.exists) throw Error("Event not found!")

    console.log(doc.data())
    return docToEventInfo(doc)
}

export async function getEvents(userId: string) {
    const docs = await db
        .collection("users")
        .doc(userId)
        .collection("events")
        .orderBy("date", "desc")
        .get()

    const events: Array<EventInfo> = []

    docs.forEach((doc) => {
        events.push(docToEventInfo(doc))
    })

    return events
}

export async function updateEvent(userId: string, event: EventInfo) {
    await db
        .collection("users")
        .doc(userId)
        .collection("events")
        .doc(event.id)
        .update({
            name: event.name,
            date: event.date,
            color: event.color,
        })
}

export async function deleteEvent(userId: string, eventId: string) {
    await db
        .collection("users")
        .doc(userId)
        .collection("events")
        .doc(eventId)
        .delete()
}

/* Settings */
export async function addDateFormat(userId: string, dateFormat: string) {
    await db.collection("users").doc(userId).update({
        dateFormat: dateFormat,
    })
}
