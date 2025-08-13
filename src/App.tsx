import { DarkTheme, LightTheme } from '@styles/theme'
import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import ThemeButton from './components/ui/ThemeButton'
import GlobalStyle from './styles/reset'
import RoutesApp from './routes'
import { RestaurantHeader } from './components/layout/Header/RestaurantHeader'

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  return (
    <BrowserRouter>
      <ThemeProvider theme={isDarkTheme ? DarkTheme : LightTheme}>
        <GlobalStyle />
        <RestaurantHeader />
        <RoutesApp />
        <ThemeButton onClick={() => setIsDarkTheme(!isDarkTheme)} />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
