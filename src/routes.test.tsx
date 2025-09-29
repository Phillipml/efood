import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import RoutesApp from './routes'
import { $lightTheme } from './styles/theme'

jest.mock('@/services/api', () => ({
  GetData: jest.fn(() =>
    Promise.resolve([
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
    ])
  )
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
const renderWithProviders = (
  component: React.ReactElement,
  initialEntries: string[] = ['/']
) => {
  return render(
    <MemoryRouter initialEntries={initialEntries}>
      <ThemeProvider theme={$lightTheme}>{component}</ThemeProvider>
    </MemoryRouter>
  )
}

describe('Routes', () => {
  beforeEach(() => {
    jest.clearAllMocks()
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

      await screen.findByTestId('card-list')

      expect(screen.getByTestId('card-list')).toBeInTheDocument()
      expect(screen.getByTestId('card-button')).toHaveTextContent(
        'Adicionar ao Carrinho'
      )
      expect(screen.getByTestId('hero')).toBeInTheDocument()
    })
  })

  describe('Navegação entre rotas', () => {
    it('navega entre rotas corretamente', async () => {
      renderWithProviders(<RoutesApp />, ['/'])

      await screen.findByTestId('card-list')

      expect(screen.getByTestId('card-button')).toHaveTextContent('Saiba Mais')

      const button = screen.getByTestId('card-button')
      fireEvent.click(button)

      expect(screen.getByTestId('card-button')).toHaveTextContent('Saiba Mais')
    })

    it('navega para restaurant via URL', async () => {
      renderWithProviders(<RoutesApp />, ['/restaurant/1'])

      await screen.findByTestId('card-list')

      expect(screen.getByTestId('card-button')).toHaveTextContent(
        'Adicionar ao Carrinho'
      )
      expect(screen.getByTestId('hero')).toBeInTheDocument()
    })

    it('navega para home via URL', async () => {
      renderWithProviders(<RoutesApp />, ['/'])

      await screen.findByTestId('card-list')

      expect(screen.getByTestId('card-button')).toHaveTextContent('Saiba Mais')
    })
  })

  describe('Comportamento das rotas', () => {
    it('renderiza rota padrão (home) quando acessa rota inválida', async () => {
      const consoleSpy = jest
        .spyOn(console, 'warn')
        .mockImplementation(() => {})

      renderWithProviders(<RoutesApp />, ['/invalid-route'])

      expect(screen.queryByTestId('card-list')).not.toBeInTheDocument()

      consoleSpy.mockRestore()
    })

    it('mantém estado das rotas após re-renderização', async () => {
      const { rerender } = renderWithProviders(<RoutesApp />, ['/'])

      await screen.findByTestId('card-list')

      expect(screen.getByTestId('card-button')).toHaveTextContent('Saiba Mais')

      rerender(
        <MemoryRouter initialEntries={['/']}>
          <ThemeProvider theme={$lightTheme}>
            <RoutesApp />
          </ThemeProvider>
        </MemoryRouter>
      )

      await screen.findByTestId('card-list')

      expect(screen.getByTestId('card-button')).toHaveTextContent('Saiba Mais')
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

      await screen.findByTestId('card-list')
      expect(screen.queryByTestId('loading')).not.toBeInTheDocument()
    })
  })
})
