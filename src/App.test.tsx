import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'
import { mockUseThemeState, resetAllMocks } from './utils/test-utils'
import { OverlayProvider } from './providers/OverlayProvider'

jest.mock('./hooks/useTheme', () => ({
  useThemeState: () => mockUseThemeState
}))

jest.mock('./components/layout/Header', () => ({
  __esModule: true,
  default: () => <div data-testid="header">Header</div>
}))

jest.mock('./components/layout/Footer', () => ({
  __esModule: true,
  default: () => <div data-testid="footer">Footer</div>
}))

jest.mock('./components/ui/ThemeButton', () => ({
  __esModule: true,
  default: ({ onClick, isDarkTheme }: { onClick: () => void; isDarkTheme: boolean }) => (
    <button data-testid="theme-button" onClick={onClick}>
      {isDarkTheme ? 'Dark' : 'Light'}
    </button>
  )
}))

jest.mock('./routes', () => ({
  __esModule: true,
  default: () => <div data-testid="routes">Routes</div>
}))

jest.mock('./components/layout/SideMenu', () => ({
  __esModule: true,
  default: () => <div data-testid="side-menu">SideMenu</div>
}))

jest.mock('./styles/reset', () => ({
  __esModule: true,
  default: () => <div data-testid="global-style">Global Style</div>
}))

const renderWithProviders = (ui: React.ReactElement) => {
  return render(
    <OverlayProvider>
      {ui}
    </OverlayProvider>
  )
}

describe('App Component', () => {
  beforeEach(() => {
    resetAllMocks()
  })

  it('renderiza todos os componentes principais', () => {
    renderWithProviders(<App />)

    expect(screen.getByTestId('header')).toBeInTheDocument()
    expect(screen.getByTestId('footer')).toBeInTheDocument()
    expect(screen.getByTestId('routes')).toBeInTheDocument()
    expect(screen.getByTestId('theme-button')).toBeInTheDocument()
    expect(screen.getByTestId('side-menu')).toBeInTheDocument()
  })

  it('toggle de tema funciona', () => {
    renderWithProviders(<App />)

    const themeButton = screen.getByTestId('theme-button')
    fireEvent.click(themeButton)

    expect(mockUseThemeState.toggleTheme).toHaveBeenCalledTimes(1)
  })

  it('múltiplos cliques no botão de tema', () => {
    renderWithProviders(<App />)

    const themeButton = screen.getByTestId('theme-button')

    fireEvent.click(themeButton)
    fireEvent.click(themeButton)

    expect(mockUseThemeState.toggleTheme).toHaveBeenCalledTimes(2)
  })
})
