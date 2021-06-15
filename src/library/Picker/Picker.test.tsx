import * as React from "react"
import { render } from "@testing-library/react-native"
import { Picker, PickerItem } from "./Picker"
import { ThemeProvider } from "../../contexts/ThemeContext"

test("Render correctly", () => {
    const data: PickerItem[] = [
        {
            text: "test 1",
            value: "test1",
        },
        {
            text: "test 2",
            value: "test2",
        },
    ]

    const { getByText } = render(
        <Picker
            data={data}
            show={true}
            setShow={() => {}}
            value={"test1"}
            setValue={() => {}}
        />,
        {
            wrapper: ThemeProvider,
        }
    )
    getByText("test 1")
    getByText("test 2")
})
