import { withThemeFromJSXProvider } from '@storybook/addon-themes'
import type { Preview } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../src/styles/reset'
import { $darkTheme, $lightTheme } from '../src/styles/theme'
import { BrowserRouter } from 'react-router-dom'
import { withRouter } from 'storybook-addon-remix-react-router'

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: $lightTheme,
      dark: $darkTheme
    },
    defaultTheme: 'light',
    Provider: ThemeProvider,
    GlobalStyles
  }),
  withRouter
]
const preview: Preview = {
  tags: ['autodocs'],
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
export default preview
