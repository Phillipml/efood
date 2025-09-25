import { useState, useContext, createContext, useEffect } from 'react'
import { $darkTheme, $lightTheme } from '@/styles/theme'

type ThemeContextType = {
  isDarkTheme: boolean
  toggleTheme: () => void
  currentTheme: typeof $darkTheme | typeof $lightTheme
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}

export const useThemeState = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const darkTheme = localStorage.getItem('efood-theme')
      return darkTheme == 'true'
    }
    return false
  })

  useEffect(() => {
    localStorage.setItem('efood-theme', String(isDarkTheme))
  }, [isDarkTheme])

  const toggleTheme = () => {
    const newTheme = !isDarkTheme
    setIsDarkTheme(newTheme)
  }

  const currentTheme = isDarkTheme ? $darkTheme : $lightTheme

  return {
    isDarkTheme,
    toggleTheme,
    currentTheme
  }
}
