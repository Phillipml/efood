import Home from '@pages/Home'
import { DarkTheme, LightTheme } from '@styles/theme'
import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Header from './components/Header'
import ThemeButton from './components/ThemeButton'
import GlobalStyle from './styles/reset'

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  return (
    <BrowserRouter>
      <ThemeProvider theme={isDarkTheme ? DarkTheme : LightTheme}>
        <GlobalStyle />
        <Header />
        <Home />
        <ThemeButton onClick={() => setIsDarkTheme(!isDarkTheme)} />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
