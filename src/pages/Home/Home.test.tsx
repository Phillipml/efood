import { screen, fireEvent } from '@testing-library/react'
import Home from '.'
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

    expect(screen.getByText('Hioki Sushi')).toBeInTheDocument()
    expect(screen.getByText('Pizza Palace')).toBeInTheDocument()
    expect(screen.getByText('Burger King')).toBeInTheDocument()
  })

  it('passa props corretas para CardList', () => {
    renderWithThemeAndRouter(<Home />)

    const buttons = screen.getAllByText('Saiba Mais')
    expect(buttons).toHaveLength(6)
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

    expect(screen.getByText('Hioki Sushi')).toBeInTheDocument()
    expect(screen.getByText('Pizza Palace')).toBeInTheDocument()
    expect(screen.getByText('Burger King')).toBeInTheDocument()
    expect(screen.getByText('Taco Bell')).toBeInTheDocument()
    expect(screen.getByText('Sushi Master')).toBeInTheDocument()
    expect(screen.getByText('Pasta House')).toBeInTheDocument()
    expect(screen.getAllByText('Saiba Mais')).toHaveLength(6)
  })

  it('renderiza tags corretamente', () => {
    renderWithThemeAndRouter(<Home />)

    expect(screen.getAllByText('Destaque da semana')).toHaveLength(3)
    expect(screen.getAllByText('Japonês')).toHaveLength(2)
    expect(screen.getAllByText('Italiano')).toHaveLength(2)
    expect(screen.getByText('Mexicano')).toBeInTheDocument()
  })

  it('renderiza ratings corretamente', () => {
    renderWithThemeAndRouter(<Home />)

    expect(screen.getByText('4.9')).toBeInTheDocument()
    expect(screen.getByText('4.7')).toBeInTheDocument()
    expect(screen.getByText('4.5')).toBeInTheDocument()
    expect(screen.getByText('4.3')).toBeInTheDocument()
    expect(screen.getByText('4.8')).toBeInTheDocument()
    expect(screen.getByText('4.6')).toBeInTheDocument()
  })

  it('aplica estilos corretos do tema', () => {
    renderWithThemeAndRouter(<Home />)

    const buttons = screen.getAllByText('Saiba Mais')
    expect(buttons).toHaveLength(6)
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
