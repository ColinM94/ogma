import * as React from "react"
import { render } from "@testing-library/react-native"
import { Icon } from "./Icon"
import { ThemeProvider } from "../../contexts/ThemeContext"
import { faPlus } from "@fortawesome/free-solid-svg-icons"

const onPressMock = jest.fn()

test("Render correctly.", () => {
    render(<Icon icon={faPlus} color="white" />, { wrapper: ThemeProvider })
})
