import * as React from "react"
import { render, fireEvent } from "@testing-library/react-native"
import { FAB } from "./FAB"
import { ThemeProvider } from "../../contexts/ThemeContext"
import { faPlus } from "@fortawesome/free-solid-svg-icons"

const onPressMock = jest.fn()

test("render FAB and test onPress", () => {
    const { getByTestId } = render(
        <FAB icon={faPlus} onPress={() => onPressMock("test")} />,
        { wrapper: ThemeProvider }
    )

    fireEvent.press(getByTestId("FAB"))
    expect(onPressMock).toHaveBeenCalledWith("test")
})
