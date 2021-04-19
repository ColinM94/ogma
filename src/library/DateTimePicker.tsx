import * as React from "react"
import DateTimePickerModal from "react-native-modal-datetime-picker"
import { formatDate, formatTime } from "common/helpers"
import { Input, InputProps } from "./Input"
import { useTheme } from "contexts/ThemeContext"

type DateTimePickerProps = InputProps & {
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
            <Input label={label} value={format()} onPress={showDatePicker} {...rest} />
            <DateTimePickerModal
                isVisible={isVisible}
                mode={mode}
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
                isDarkModeEnabled={true}
                style={{
                    backgroundColor: "orange"
                }}
                timePickerModeAndroid='default'
            />
        </>
    )
}