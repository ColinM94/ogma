import dayjs from 'dayjs'

export function formatDate(date: Date) {
    const d = dayjs(date)
    return d.format('DD/MM/YYYY')
}

export function formatTime(date: Date) {
    const d = dayjs(date)
    return d.format("HH:mm")
}
