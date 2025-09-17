import { $darkTheme, $lightTheme } from '@styles/theme'
import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import ThemeButton from './components/ui/ThemeButton'
import GlobalStyle from './styles/reset'
import RoutesApp from './routes'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

function App() {
  const [isdarkTheme, setIsdarkTheme] = useState(false)
  return (
    <BrowserRouter>
      <ThemeProvider theme={isdarkTheme ? $darkTheme : $lightTheme}>
        <GlobalStyle />
        <Header />
        <RoutesApp />
        <Footer />
        <ThemeButton onClick={() => setIsdarkTheme(!isdarkTheme)} />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
