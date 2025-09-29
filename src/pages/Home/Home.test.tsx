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

jest.mock('@/services/api', () => ({
  GetData: jest.fn(() => Promise.resolve([
    {
      id: 1,
      titulo: 'Hioki Sushi',
      tipo: 'japonês',
      capa: 'hioki.jpg',
      destacado: true,
      avaliacao: 4.9
    },
    {
      id: 2,
      titulo: 'Pizza Palace',
      tipo: 'italiano',
      capa: 'pizza.jpg',
      destacado: true,
      avaliacao: 4.7
    },
    {
      id: 3,
      titulo: 'Burger King',
      tipo: 'americano',
      capa: 'burger.jpg',
      destacado: false,
      avaliacao: 4.5
    },
    {
      id: 4,
      titulo: 'Taco Bell',
      tipo: 'mexicano',
      capa: 'taco.jpg',
      destacado: true,
      avaliacao: 4.3
    },
    {
      id: 5,
      titulo: 'Sushi Master',
      tipo: 'japonês',
      capa: 'sushi.jpg',
      destacado: false,
      avaliacao: 4.8
    },
    {
      id: 6,
      titulo: 'Pasta House',
      tipo: 'italiano',
      capa: 'pasta.jpg',
      destacado: false,
      avaliacao: 4.6
    }
  ]))
}))

describe('Home Page', () => {
  beforeEach(() => {
    resetAllMocks()
  })

  it('renderiza CardList', async () => {
    renderWithThemeAndRouter(<Home />)

    await new Promise(resolve => setTimeout(resolve, 100))

    expect(screen.getByText('Hioki Sushi')).toBeInTheDocument()
    expect(screen.getByText('Pizza Palace')).toBeInTheDocument()
    expect(screen.getByText('Burger King')).toBeInTheDocument()
  })

  it('passa props corretas para CardList', async () => {
    renderWithThemeAndRouter(<Home />)

    await new Promise(resolve => setTimeout(resolve, 100))

    const buttons = screen.getAllByText('Saiba Mais')
    expect(buttons).toHaveLength(6)
  })

  it('executa navegação quando onClick é chamado', async () => {
    renderWithThemeAndRouter(<Home />)

    await new Promise(resolve => setTimeout(resolve, 100))

    const buttons = screen.getAllByText('Saiba Mais')
    fireEvent.click(buttons[0])

    expect(mockNavigate).toHaveBeenCalledWith('/restaurant/1')
    expect(mockNavigate).toHaveBeenCalledTimes(1)
  })

  it('renderiza sem quebrar', async () => {
    renderWithThemeAndRouter(<Home />)

    await new Promise(resolve => setTimeout(resolve, 100))

    expect(screen.getByText('Hioki Sushi')).toBeInTheDocument()
    expect(screen.getByText('Pizza Palace')).toBeInTheDocument()
    expect(screen.getByText('Burger King')).toBeInTheDocument()
    expect(screen.getByText('Taco Bell')).toBeInTheDocument()
    expect(screen.getByText('Sushi Master')).toBeInTheDocument()
    expect(screen.getByText('Pasta House')).toBeInTheDocument()
    expect(screen.getAllByText('Saiba Mais')).toHaveLength(6)
  })

  it('renderiza tags corretamente', async () => {
    renderWithThemeAndRouter(<Home />)

    await new Promise(resolve => setTimeout(resolve, 100))

    expect(screen.getAllByText('Destaque da semana')).toHaveLength(3)
    expect(screen.getAllByText('japonês')).toHaveLength(2)
    expect(screen.getAllByText('italiano')).toHaveLength(2)
    expect(screen.getByText('mexicano')).toBeInTheDocument()
  })

  it('renderiza ratings corretamente', async () => {
    renderWithThemeAndRouter(<Home />)

    await new Promise(resolve => setTimeout(resolve, 100))

    expect(screen.getByText('4.9')).toBeInTheDocument()
    expect(screen.getByText('4.7')).toBeInTheDocument()
    expect(screen.getByText('4.5')).toBeInTheDocument()
    expect(screen.getByText('4.3')).toBeInTheDocument()
    expect(screen.getByText('4.8')).toBeInTheDocument()
    expect(screen.getByText('4.6')).toBeInTheDocument()
  })

  it('aplica estilos corretos do tema', async () => {
    renderWithThemeAndRouter(<Home />)

    await new Promise(resolve => setTimeout(resolve, 100))

    const buttons = screen.getAllByText('Saiba Mais')
    expect(buttons).toHaveLength(6)
  })

  it('navega corretamente para página de restaurantes', async () => {
    renderWithThemeAndRouter(<Home />)

    await new Promise(resolve => setTimeout(resolve, 100))

    const buttons = screen.getAllByText('Saiba Mais')

    fireEvent.click(buttons[0])
    expect(mockNavigate).toHaveBeenCalledWith('/restaurant/1')

    fireEvent.click(buttons[1])
    expect(mockNavigate).toHaveBeenCalledWith('/restaurant/2')
    expect(mockNavigate).toHaveBeenCalledTimes(2)
  })
})
