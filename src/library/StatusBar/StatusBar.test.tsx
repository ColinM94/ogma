import * as React from "react"
import { render } from "@testing-library/react-native"
import { StatusBar } from "./StatusBar"
import { ThemeProvider } from "../../contexts/ThemeContext"

test("renders correctly", () => {
    const { getByText } = render(<StatusBar />, {
        wrapper: ThemeProvider,
    })
})
