import * as React from "react"
import { render, fireEvent } from "@testing-library/react-native"
import { Text, View } from "react-native"
import { ThemeProvider } from "contexts/ThemeContext"
import { Card } from "./Card"

const onPressMock = jest.fn()

test("renders correctly, with children, and onPress works properly.", () => {
    const { getByText, getByTestId } = render(
        <Card onPress={() => onPressMock("test")}>
            <View>
                <Text>Text 1</Text>
            </View>
            <View>
                <Text>Text 2</Text>
            </View>
        </Card>,
        { wrapper: ThemeProvider }
    )

    getByText("Text 1")
    getByText("Text 2")
    fireEvent.press(getByTestId("card"))
    expect(onPressMock).toHaveBeenCalledWith("test")
})
