import * as React from "react"
import { ColorValue, StyleProp, TextStyle } from "react-native"

type ThemeProviderProps = {
    children?: JSX.Element | JSX.Element[]
}

type UseThemeProps = {
    theme: Theme
    isDark: boolean
    setIsDark: (arg: boolean) => void
}

type Colors = {
    primary: ColorValue
    secondary: ColorValue
    background: ColorValue
    card: ColorValue
    error: ColorValue
    feedback: ColorValue
    text: {
        primary: ColorValue
        secondary: ColorValue
        tertiary: ColorValue
    }
}

type Theme = {
    colors: Colors
    typography: {
        h1: StyleProp<TextStyle>
        h2: StyleProp<TextStyle>
        h3: StyleProp<TextStyle>
        body: StyleProp<TextStyle>
        overline: StyleProp<TextStyle>
        subtitle: StyleProp<TextStyle>
        subtitle2: StyleProp<TextStyle>
        input: StyleProp<TextStyle>
        placeholder: StyleProp<TextStyle>
        button: StyleProp<TextStyle>
    }
    icon: {
        size: number
        color: ColorValue
    }
    spacing: {
        primary: number
        secondary: number
        tertiary: number
    }
    roundness: number
    elevation: {
        header: number
        card: number
    }
}

export const ThemeContext = React.createContext<UseThemeProps>({} as UseThemeProps)

export const useTheme = () => {
    return React.useContext(ThemeContext)
}

export function ThemeProvider({ children }: ThemeProviderProps) {
    const [isDark, setIsDark] = React.useState(true)

    const colors = {
        primary: "#3E84E0",
        secondary: "#21bf26",
        background: isDark ? "#121212" : "#F2F0EA", // "#EEEEEE",
        card: isDark ? "#1E1E1E" : "white",
        error: "#C51162",
        feedback: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
        text: {
            primary: isDark ? "rgba(255, 255, 255, 0.87)" : "rgba(0, 0, 0, 0.87)",
            secondary: isDark ? "rgba(255, 255, 255, 0.54)" : "rgba(0, 0, 0, 0.64)",
            tertiary: isDark ? "rgba(255, 255, 255, 0.38)" : "rgba(0, 0, 0, 0.38)",
        },
    }

    const theme: Theme = {
        colors: colors,
        typography: {
            h1: {
                fontSize: 24,
                letterSpacing: 0.25,
                color: colors.text.primary,
            },
            h2: {
                fontSize: 22,
                letterSpacing: 0,
                color: colors.text.primary,
            },
            h3: {
                fontSize: 20,
                letterSpacing: 0,
                color: colors.text.primary,
            },
            body: {
                fontSize: 16,
                letterSpacing: 0.5,
                color: colors.text.primary,
            },
            overline: {
                fontSize: 10,
                letterSpacing: 1.5,
                color: colors.text.secondary,
                textTransform: "uppercase",
            },
            subtitle: {
                fontSize: 16,
                letterSpacing: 0.15,
                color: colors.text.secondary,
            },
            subtitle2: {
                fontSize: 14,
                letterSpacing: 0.1,
                color: colors.text.secondary,
            },
            input: {
                fontSize: 16,
                letterSpacing: 0.5,
                color: colors.text.primary,
            },
            placeholder: {
                fontSize: 16,
                letterSpacing: 0.5,
                color: colors.text.tertiary,
            },
            button: {
                fontSize: 14,
                letterSpacing: 1.25,
                textTransform: "uppercase",
                color: "rgba(255, 255, 255, 0.87)",
            },
        },
        icon: {
            size: 22,
            color: colors.text.secondary,
        },
        spacing: {
            primary: 12,
            secondary: 8,
            tertiary: 4,
        },
        roundness: 4,
        elevation: {
            header: isDark ? 0 : 4,
            card: isDark ? 0 : 2,
        },
    }

    const value: UseThemeProps = {
        theme,
        isDark,
        setIsDark,
    }

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
