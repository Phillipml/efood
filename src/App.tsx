import Counter from '@components/Counter'
import { DarkTheme, LightTheme } from '@styles/theme'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import ThemeButton from './components/ThemeButton'
import GlobalStyle from './styles/reset'

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  return (
    <ThemeProvider theme={isDarkTheme ? DarkTheme : LightTheme}>
      <GlobalStyle />
      <ThemeButton onClick={() => setIsDarkTheme(!isDarkTheme)} />
      <Counter />
    </ThemeProvider>
  )
}

export default App
