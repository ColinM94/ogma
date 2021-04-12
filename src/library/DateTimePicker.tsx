import * as React from "react"
import DateTimePickerModal from "react-native-modal-datetime-picker"
import { formatDate, formatTime } from "common/helpers"
import { Input } from "./Input"

type DateTimePickerProps = {
    label: string,
    value: Date,
    setValue: (date: Date) => void,
    mode?: "date" | "time"
}

export const DateTimePicker = (props: DateTimePickerProps) => {
    const { value, setValue, mode = "date", label = "Date", ...rest } = props

    const [isVisible, setIsVisible] = React.useState(false)

    const showDatePicker = () => {
        setIsVisible(true)
    }

    const hideDatePicker = () => {
        setIsVisible(false)
    }

    const handleConfirm = (date: Date) => {
        setValue(date)
        hideDatePicker()
    }

    const format = () => {
        const dateString = mode === "date" ? formatDate(value) : formatTime(value)
        return dateString
    }

    return (
        <>
            <Input label={label} editable={false} value={format()} onPress={showDatePicker} {...rest} />
            <DateTimePickerModal
                isVisible={isVisible}
                mode={mode}
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
        </>
    )
}