import { withThemeFromJSXProvider } from '@storybook/addon-themes'
import { Preview } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../src/styles/reset'
import { DarkTheme, LightTheme } from '../src/styles/theme'

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: LightTheme,
      dark: DarkTheme
    },
    defaultTheme: 'light',
    Provider: ThemeProvider,
    GlobalStyles
  })
]
const preview: Preview = {
  parameters: {
    actions: { argTypeRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
}
