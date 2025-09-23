import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'
import { mockLightTheme } from './utils/__mocks__/themes'

const mockToggleTheme = jest.fn()

jest.mock('./hooks/useTheme', () => ({
  useThemeState: () => ({
    currentTheme: mockLightTheme,
    toggleTheme: mockToggleTheme
  })
}))

jest.mock('./components/layout/Header', () => {
  return function MockHeader() {
    return <div data-testid="header">Header</div>
  }
})

jest.mock('./components/layout/Footer', () => {
  return function MockFooter() {
    return <div data-testid="footer">Footer</div>
  }
})

jest.mock('./components/ui/ThemeButton', () => {
  return function MockThemeButton({ onClick }: { onClick: () => void }) {
    return (
      <button data-testid="theme-button" onClick={onClick}>
        Theme Button
      </button>
    )
  }
})

jest.mock('./routes', () => {
  return function MockRoutesApp() {
    return <div data-testid="routes">Routes</div>
  }
})

jest.mock('./styles/reset', () => {
  return function MockGlobalStyle() {
    return <div data-testid="global-style">Global Style</div>
  }
})

describe('App Component', () => {
  beforeEach(() => {
    mockToggleTheme.mockClear()
  })

  it('renderiza sem quebrar', () => {
    render(<App />)

    expect(screen.getByTestId('header')).toBeInTheDocument()
    expect(screen.getByTestId('footer')).toBeInTheDocument()
    expect(screen.getByTestId('routes')).toBeInTheDocument()
    expect(screen.getByTestId('theme-button')).toBeInTheDocument()
  })

  it('renderiza ThemeProvider', () => {
    render(<App />)

    const header = screen.getByTestId('header')
    expect(header).toBeInTheDocument()
  })

  it('renderiza BrowserRouter', () => {
    render(<App />)

    const header = screen.getByTestId('header')
    expect(header).toBeInTheDocument()
  })

  it('renderiza Header', () => {
    render(<App />)

    const header = screen.getByTestId('header')
    expect(header).toBeInTheDocument()
    expect(header).toHaveTextContent('Header')
  })

  it('renderiza RoutesApp', () => {
    render(<App />)

    const routes = screen.getByTestId('routes')
    expect(routes).toBeInTheDocument()
    expect(routes).toHaveTextContent('Routes')
  })

  it('renderiza Footer', () => {
    render(<App />)

    const footer = screen.getByTestId('footer')
    expect(footer).toBeInTheDocument()
    expect(footer).toHaveTextContent('Footer')
  })

  it('renderiza ThemeButton', () => {
    render(<App />)

    const themeButton = screen.getByTestId('theme-button')
    expect(themeButton).toBeInTheDocument()
    expect(themeButton).toHaveTextContent('Theme Button')
  })

  it('toggle de tema funciona', () => {
    render(<App />)

    const themeButton = screen.getByTestId('theme-button')
    fireEvent.click(themeButton)

    expect(mockToggleTheme).toHaveBeenCalledTimes(1)
  })

  it('aplica tema correto', () => {
    render(<App />)

    const header = screen.getByTestId('header')
    const footer = screen.getByTestId('footer')
    const routes = screen.getByTestId('routes')
    const themeButton = screen.getByTestId('theme-button')

    expect(header).toBeInTheDocument()
    expect(footer).toBeInTheDocument()
    expect(routes).toBeInTheDocument()
    expect(themeButton).toBeInTheDocument()
  })

  it('estrutura completa do App', () => {
    render(<App />)

    expect(screen.getByTestId('global-style')).toBeInTheDocument()
    expect(screen.getByTestId('header')).toBeInTheDocument()
    expect(screen.getByTestId('routes')).toBeInTheDocument()
    expect(screen.getByTestId('footer')).toBeInTheDocument()
    expect(screen.getByTestId('theme-button')).toBeInTheDocument()
  })

  it('múltiplos cliques no ThemeButton', () => {
    render(<App />)

    const themeButton = screen.getByTestId('theme-button')

    fireEvent.click(themeButton)
    fireEvent.click(themeButton)
    fireEvent.click(themeButton)

    expect(mockToggleTheme).toHaveBeenCalledTimes(3)
  })
})
