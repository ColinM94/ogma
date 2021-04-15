import * as React from "react"
import { StyleProp, TextStyle } from "react-native"

type ThemeProviderProps = {
    children?: JSX.Element | JSX.Element[]
}

type UseThemeProps = {
    theme: Theme,
    isDark: boolean,
    setIsDark: (arg: boolean) => void
}

type Colors = {
    primary: string,
    secondary: string,
    background: string,
    card: string,
    accent: string,
    text: {
        primary: string,
        secondary: string,
        tertiary: string
    }
}

type Theme = {
    colors: Colors,
    typography: {
        title: StyleProp<TextStyle>,
        h1: StyleProp<TextStyle>,
        h2: StyleProp<TextStyle>,
        h3: StyleProp<TextStyle>,
        body: StyleProp<TextStyle>,
        overline: StyleProp<TextStyle>,
        subtitle: StyleProp<TextStyle>,
        subtitle2: StyleProp<TextStyle>,
        input: StyleProp<TextStyle>,
        button: StyleProp<TextStyle>,
    },
    icon: {
        size: number,
        color: string
    },
    spacing: {
        primary: number,
        secondary: number,
        tertiary: number
    }
    roundness: number,
    elevation: {
        header: number,
        card: number
    }
}

const ThemeContext = React.createContext<UseThemeProps>({} as UseThemeProps)

export const useTheme = () => {
    return React.useContext(ThemeContext)
}

export function ThemeProvider({ children }: ThemeProviderProps) {
    const [isDark, setIsDark] = React.useState(true)

    const colors = {
        primary: "#03b1fc",
        secondary: "red",
        background: isDark ? "#121212" : "#EEEEEE",
        card: isDark ? "#272727" : "white",
        accent: isDark ? "grey" : "lightgrey",
        text: {
            primary: isDark ? "rgba(255, 255, 255, 0.87)" : "rgba(0, 0, 0, 0.87)",
            secondary: isDark ? "rgba(255, 255, 255, 0.54)" : "rgba(0, 0, 0, 0.64)",
            tertiary: isDark ? "rgba(255, 255, 255, 0.38)" : "rgba(0, 0, 0, 0.38)",
        }
    }

    const theme: Theme = {
        colors: colors,
        typography: {
            title: {
                fontSize: 24,
                letterSpacing: 0.5,
                color: colors.text.primary
            },
            h1: {
                fontSize: 24,
                letterSpacing: 0.25,
                color: colors.text.primary
            },
            h2: {
                fontSize: 22,
                letterSpacing: 0,
                color: colors.text.primary
            },
            h3: {
                fontSize: 20,
                letterSpacing: 0,
                color: colors.text.primary
            },
            body: {
                fontSize: 16,
                letterSpacing: 0.5,
                color: colors.text.primary
            },
            overline: {
                fontSize: 12,
                letterSpacing: 0.4,
                color: colors.text.secondary,
            },
            subtitle: {
                fontSize: 16,
                letterSpacing: 0.15,
                color: colors.primary,
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
            button: {
                fontSize: 14,
                letterSpacing: 1.25,
                textTransform: 'uppercase',
                color: "rgba(255, 255, 255, 0.87)"
            },
        },
        icon: {
            size: 22,
            color: colors.text.secondary
        },
        spacing: {
            primary: 12,
            secondary: 8,
            tertiary: 4
        },
        roundness: 4,
        elevation: {
            header: 4,
            card: 2,
        },
    }

    const value: UseThemeProps = {
        theme,
        isDark,
        setIsDark
    }

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}