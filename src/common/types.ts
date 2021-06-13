type FlashCardData = {
    id?: string
    front: {
        line1: {
            text: string
        }
        line2: {
            text: string
        }
        notes: {
            text: string
        }
    }
    back: {
        line1: {
            text: string
        }
        line2: {
            text: string
        }
        notes: {
            text: string
        }
    }
    dateCreated: Date
    category?: string
}
