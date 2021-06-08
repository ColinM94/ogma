import * as React from "react"
import { render, fireEvent } from "@testing-library/react-native"
import { Button } from "./Button"
import { ThemeProvider } from "contexts/ThemeContext"

const onPressMock = jest.fn()

test("renders correctly and onPress works properly.", () => {
    const { getByTestId } = render(
        <Button
            title="test"
            onPress={() => onPressMock("test")}
            style={{ backgroundColor: "blue" }}
            textStyle={{ color: "orange" }}
        />,
        { wrapper: ThemeProvider }
    )

    fireEvent.press(getByTestId("button"))
    expect(onPressMock).toHaveBeenCalled()
})
