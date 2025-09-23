import { screen, fireEvent } from '@testing-library/react'
import Home from './Home'
import {
  renderWithThemeAndRouter,
  mockNavigate,
  resetAllMocks
} from '@/utils/test-utils'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate
}))

describe('Home Page', () => {
  beforeEach(() => {
    resetAllMocks()
  })

  it('renderiza CardList', () => {
    renderWithThemeAndRouter(<Home />)

    const cards = screen.getAllByText('Hioki Sushi')
    expect(cards.length).toBeGreaterThan(0)
  })

  it('passa props corretas para CardList', () => {
    renderWithThemeAndRouter(<Home />)

    const buttons = screen.getAllByText('Saiba Mais')
    expect(buttons).toHaveLength(7)
  })

  it('executa navegação quando onClick é chamado', () => {
    renderWithThemeAndRouter(<Home />)

    const buttons = screen.getAllByText('Saiba Mais')
    fireEvent.click(buttons[0])

    expect(mockNavigate).toHaveBeenCalledWith('/restaurant')
    expect(mockNavigate).toHaveBeenCalledTimes(1)
  })

  it('renderiza sem quebrar', () => {
    renderWithThemeAndRouter(<Home />)

    expect(screen.getAllByText('Hioki Sushi')).toHaveLength(7)
    expect(screen.getAllByText('Saiba Mais')).toHaveLength(7)
    expect(screen.getAllByText('4.9')).toHaveLength(7)
  })

  it('aplica estilos corretos do tema', () => {
    renderWithThemeAndRouter(<Home />)

    const cards = screen.getAllByText('Hioki Sushi')
    expect(cards).toHaveLength(7)

    const buttons = screen.getAllByText('Saiba Mais')
    expect(buttons).toHaveLength(7)
  })

  it('navega corretamente para página de restaurantes', () => {
    renderWithThemeAndRouter(<Home />)

    const buttons = screen.getAllByText('Saiba Mais')

    fireEvent.click(buttons[0])
    expect(mockNavigate).toHaveBeenCalledWith('/restaurant')

    fireEvent.click(buttons[1])
    expect(mockNavigate).toHaveBeenCalledWith('/restaurant')
    expect(mockNavigate).toHaveBeenCalledTimes(2)
  })
})
