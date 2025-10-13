import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { useThemeState } from './hooks/useTheme'
import ThemeButton from './components/ui/ThemeButton'
import GlobalStyle from './styles/reset'
import RoutesApp from './routes'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import SideMenu from './components/ui/SideMenu'

function AppContent() {
  const { currentTheme, toggleTheme, isDarkTheme } = useThemeState()

  return (
    <StyledThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <SideMenu />
      <ThemeButton onClick={toggleTheme} isDarkTheme={isDarkTheme} />
      <Header />
      <RoutesApp />
      <Footer />
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
