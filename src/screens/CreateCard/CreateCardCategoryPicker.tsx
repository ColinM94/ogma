import * as React from "react"
import { View } from "react-native"
import { Picker, PickerItem } from "library/Picker"
import { CreateCardInput, CreateCardInputProps } from "./CreateCardInput"

interface CreateCardCategoryPickerProps extends CreateCardInputProps {}

export const CreateCardCategoryPicker = (props: CreateCardCategoryPickerProps) => {
    const { value, setValue, ...rest } = props
    const [showPicker, setShowPicker] = React.useState(false)

    const options: PickerItem[] = [
        {
            text: "No Category",
            value: "",
        },
        {
            value: "Noun",
        },
        {
            value: "Verb",
        },
    ]

    return (
        <>
            <CreateCardInput
                onPress={() => setShowPicker(!showPicker)}
                value={value}
                isFocus={showPicker}
                {...rest}
            />
            <Picker
                data={options}
                value={value}
                setValue={setValue}
                show={showPicker}
                setShow={setShowPicker}
                cancelBtnEnabled={false}
            />
        </>
    )
}
