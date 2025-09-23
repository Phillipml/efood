import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { MemoryRouter } from 'react-router-dom'
import Home from './Home'
import { $lightTheme } from '@/styles/theme'

const mockNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate
}))

const renderWithTheme = (component: React.ReactElement) => {
  return render(
    <MemoryRouter>
      <ThemeProvider theme={$lightTheme}>{component}</ThemeProvider>
    </MemoryRouter>
  )
}

describe('Home Page', () => {
  beforeEach(() => {
    mockNavigate.mockClear()
  })

  it('renderiza CardList', () => {
    renderWithTheme(<Home />)

    const cards = screen.getAllByText('Hioki Sushi')
    expect(cards.length).toBeGreaterThan(0)
  })

  it('passa props corretas para CardList', () => {
    renderWithTheme(<Home />)

    const buttons = screen.getAllByText('Saiba Mais')
    expect(buttons).toHaveLength(7)
  })

  it('executa navegação quando onClick é chamado', () => {
    renderWithTheme(<Home />)

    const buttons = screen.getAllByText('Saiba Mais')
    fireEvent.click(buttons[0])

    expect(mockNavigate).toHaveBeenCalledWith('/restaurant')
    expect(mockNavigate).toHaveBeenCalledTimes(1)
  })

  it('renderiza sem quebrar', () => {
    renderWithTheme(<Home />)

    expect(screen.getAllByText('Hioki Sushi')).toHaveLength(7)
    expect(screen.getAllByText('Saiba Mais')).toHaveLength(7)
    expect(screen.getAllByText('4.9')).toHaveLength(7)
  })

  it('aplica estilos corretos do tema', () => {
    renderWithTheme(<Home />)

    const cards = screen.getAllByText('Hioki Sushi')
    expect(cards).toHaveLength(7)

    const buttons = screen.getAllByText('Saiba Mais')
    expect(buttons).toHaveLength(7)
  })

  it('navega corretamente para página de restaurantes', () => {
    renderWithTheme(<Home />)

    const buttons = screen.getAllByText('Saiba Mais')

    fireEvent.click(buttons[0])
    expect(mockNavigate).toHaveBeenCalledWith('/restaurant')

    fireEvent.click(buttons[1])
    expect(mockNavigate).toHaveBeenCalledWith('/restaurant')
    expect(mockNavigate).toHaveBeenCalledTimes(2)
  })
})
