import * as React from "react"
import { render, fireEvent } from "@testing-library/react-native"
import { Pressable } from "../Pressable"
import { ThemeProvider } from "../../contexts/ThemeContext"
import { View, Text } from "react-native"

test("Render correctly", () => {
    const onPressMock = jest.fn()

    const { getByText, getByTestId } = render(
        <Pressable onPress={() => onPressMock("test")}>
            <View>
                <Text>Test Text</Text>
            </View>
        </Pressable>,
        {
            wrapper: ThemeProvider,
        }
    )
    getByText("Test Text")
    fireEvent.press(getByTestId("pressable"))
    expect(onPressMock).toHaveBeenCalledWith("test")
})
