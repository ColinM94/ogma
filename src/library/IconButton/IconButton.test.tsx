import * as React from "react"
import { render, fireEvent } from "@testing-library/react-native"
import { IconButton } from "./IconButton"
import { ThemeProvider } from "../../contexts/ThemeContext"
import { faPlus } from "@fortawesome/free-solid-svg-icons"

const onPressMock = jest.fn()

test("Render correctly and onPress works properly.", () => {
    const { getByTestId } = render(
        <IconButton icon={faPlus} onPress={onPressMock} />,
        {
            wrapper: ThemeProvider,
        }
    )
    fireEvent.press(getByTestId("iconButton"))
    expect(onPressMock).toHaveBeenCalled()
})
