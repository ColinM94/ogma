type FlashCardData = {
    id?: string,
    front: {
        title: string,
        subtitle: string
    },
    back: {
        title: string,
        subtitle: string
    },
    dateCreated: Date,
    category?: string
}