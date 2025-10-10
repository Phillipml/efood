import { screen, fireEvent, cleanup, waitFor } from '@testing-library/react'
import RoutesApp from './routes'
import { renderWithProviders } from './utils/test-utils'

const mockGetData = jest.fn()
jest.mock('@/services/api', () => ({
  GetData: mockGetData
}))
const mockNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
  useParams: () => ({ id: '1' })
}))

jest.mock('@/components/layout/CardList', () => {
  return function MockCardList({ children }: { children: React.ReactNode }) {
    return <div data-testid="card-list">{children}</div>
  }
})

jest.mock('@/components/ui/Card', () => {
  return function MockCard({
    buttonTxt,
    onClick,
    name
  }: {
    buttonTxt: string
    onClick?: () => void
    name?: string
  }) {
    return (
      <div data-testid="card">
        <span data-testid="card-name">{name}</span>
        <button onClick={onClick} data-testid="card-button">
          {buttonTxt}
        </button>
      </div>
    )
  }
})

jest.mock('@/components/ui/Loading', () => {
  return function MockLoading() {
    return <div data-testid="loading">Loading...</div>
  }
})

jest.mock('@/components/ui/Hero', () => {
  return function MockHero() {
    return <div data-testid="hero">Hero Section</div>
  }
})

jest.mock('@/components/ui/Modal', () => {
  return function MockModal({
    $isOpen,
    children
  }: {
    $isOpen: boolean
    children: React.ReactNode
  }) {
    if (!$isOpen) return null
    return <div data-testid="modal">{children}</div>
  }
})

describe('Routes', () => {
  const mockRestaurantData = [
    {
      id: 1,
      titulo: 'Restaurante Teste',
      destacado: true,
      tipo: 'Italiana',
      avaliacao: 4.5,
      descricao: 'Descrição do restaurante',
      capa: 'https://example.com/capa.jpg',
      cardapio: [
        {
          id: 1,
          nome: 'Prato Teste',
          descricao: 'Descrição do prato',
          foto: 'https://example.com/prato.jpg',
          preco: 25.9,
          porcao: 'Serve 2 pessoas'
        }
      ]
    }
  ]

  beforeEach(() => {
    jest.clearAllMocks()
    mockGetData.mockResolvedValue(mockRestaurantData)
  })

  afterEach(() => {
    cleanup()
  })

  describe('Renderização das rotas', () => {
    it('renderiza rota home corretamente', async () => {
      renderWithProviders(<RoutesApp />, ['/'])

      await screen.findByTestId('card-list')

      expect(screen.getByTestId('card-list')).toBeInTheDocument()
      expect(screen.getByTestId('card-button')).toHaveTextContent('Saiba Mais')
      expect(screen.getByTestId('card-name')).toHaveTextContent(
        'Restaurante Teste'
      )
    })

    it('renderiza rota restaurant corretamente', async () => {
      renderWithProviders(<RoutesApp />, ['/restaurant/1'])

      await screen.findByTestId('card')

      expect(screen.getByTestId('card')).toBeInTheDocument()
      expect(screen.getByTestId('card-button')).toHaveTextContent(
        'Adicionar ao Carrinho'
      )
      expect(screen.getByTestId('hero')).toBeInTheDocument()
    })

    it('renderiza múltiplos restaurantes na home', async () => {
      const multipleRestaurants = [
        ...mockRestaurantData,
        {
          id: 2,
          titulo: 'Restaurante 2',
          destacado: false,
          tipo: 'Japonesa',
          avaliacao: 4.8,
          descricao: 'Descrição do restaurante 2',
          capa: 'https://example.com/capa2.jpg',
          cardapio: []
        }
      ]
      
      mockGetData.mockResolvedValueOnce(multipleRestaurants)
      
      renderWithProviders(<RoutesApp />, ['/'])

      await screen.findByTestId('card-list')

      const cards = screen.getAllByTestId('card')
      expect(cards).toHaveLength(2)
      expect(screen.getByText('Restaurante Teste')).toBeInTheDocument()
      expect(screen.getByText('Restaurante 2')).toBeInTheDocument()
    })
  })

  describe('Navegação entre rotas', () => {
    it('navega para restaurant quando clica no botão Saiba Mais', async () => {
      renderWithProviders(<RoutesApp />, ['/'])

      await screen.findByTestId('card-list')

      const button = screen.getByTestId('card-button')
      expect(button).toHaveTextContent('Saiba Mais')

      fireEvent.click(button)

      expect(mockNavigate).toHaveBeenCalledWith('/restaurant/1')
    })

    it('renderiza página restaurant quando acessa via URL', async () => {
      renderWithProviders(<RoutesApp />, ['/restaurant/1'])

      await screen.findByTestId('card')

      expect(screen.getByTestId('card-button')).toHaveTextContent(
        'Adicionar ao Carrinho'
      )
      expect(screen.getByTestId('hero')).toBeInTheDocument()
    })

    it('renderiza página home quando acessa via URL', async () => {
      renderWithProviders(<RoutesApp />, ['/'])

      await screen.findByTestId('card-list')

      expect(screen.getByTestId('card-button')).toHaveTextContent('Saiba Mais')
    })
  })

  describe('Comportamento das rotas', () => {
    it('renderiza página 404 para rota inválida', async () => {
      renderWithProviders(<RoutesApp />, ['/invalid-route'])

      await waitFor(() => {
        expect(screen.queryByTestId('card-list')).not.toBeInTheDocument()
        expect(screen.queryByTestId('card')).not.toBeInTheDocument()
      })
    })

    it('testa carregamento inicial na página home', async () => {
      renderWithProviders(<RoutesApp />, ['/'])

      expect(screen.getByTestId('loading')).toBeInTheDocument()

      await screen.findByTestId('card-list')
      expect(screen.queryByTestId('loading')).not.toBeInTheDocument()
    })

    it('testa carregamento inicial na página restaurant', async () => {
      renderWithProviders(<RoutesApp />, ['/restaurant/1'])

      expect(screen.getByTestId('loading')).toBeInTheDocument()

      await screen.findByTestId('card')
      expect(screen.queryByTestId('loading')).not.toBeInTheDocument()
    })

    it('testa erro na API na página home', async () => {
      mockGetData.mockRejectedValueOnce(new Error('Erro na API'))

      renderWithProviders(<RoutesApp />, ['/'])

      expect(screen.getByTestId('loading')).toBeInTheDocument()

      await waitFor(() => {
        expect(screen.queryByTestId('loading')).not.toBeInTheDocument()
      })
    })

    it('testa erro na API na página restaurant', async () => {
      mockGetData.mockRejectedValueOnce(new Error('Erro na API'))

      renderWithProviders(<RoutesApp />, ['/restaurant/1'])

      expect(screen.getByTestId('loading')).toBeInTheDocument()

      await waitFor(() => {
        expect(screen.queryByTestId('loading')).not.toBeInTheDocument()
      })
    })
  })
})
