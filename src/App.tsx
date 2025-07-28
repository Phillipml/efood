import { DarkTheme, LightTheme } from '@styles/theme'
import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import ThemeButton from './components/ThemeButton'
import Home from './pages/Home'
import GlobalStyle from './styles/reset'

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  return (
    <BrowserRouter>
      <ThemeProvider theme={isDarkTheme ? DarkTheme : LightTheme}>
        <GlobalStyle />
        <ThemeButton onClick={() => setIsDarkTheme(!isDarkTheme)} />
        <Home />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
