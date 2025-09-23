import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { useThemeState } from './hooks/useTheme'
import ThemeButton from './components/ui/ThemeButton'
import GlobalStyle from './styles/reset'
import RoutesApp from './routes'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

function AppContent() {
  const { currentTheme, toggleTheme } = useThemeState()

  return (
    <StyledThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Header />
      <RoutesApp />
      <Footer />
      <ThemeButton onClick={toggleTheme} />
    </StyledThemeProvider>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App
