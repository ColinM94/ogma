import dayjs from "dayjs"

// Takes in a JS date object and returns a formatted date string.
export function formatDate(date: Date) {
    let day = ("0" + date.getDate()).slice(-2) // https://stackoverflow.com/questions/6040515/how-do-i-get-month-and-date-of-javascript-in-2-digit-format/18610204
    let month = ("0" + (date.getMonth() + 1)).slice(-2)
    let year = date.getFullYear()
    return day + "/" + month + "/" + year
}

// Takes JS Date object and returns formatted time string.
export function formatTime(date: Date) {
    return ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2)
}
