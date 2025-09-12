import { useState, useContext, createContext } from "react";
import { $darkTheme, $lightTheme } from "@/styles/theme";

type ThemeContextType = {
    isDarkTheme: boolean
    toggleTheme: () => void
    currentTheme: typeof $darkTheme | typeof $lightTheme
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const useTheme = () => {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error ('useTheme must be used within ThemeProvider')
    }
    return context
}

export const useThemeState = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false)
    const toggleTheme = () => setIsDarkTheme(!isDarkTheme)
    const currentTheme = isDarkTheme ? $darkTheme : $lightTheme

    return {
        isDarkTheme,
        toggleTheme,
        currentTheme
    }
}