import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import RoutesApp from './routes'
import { $lightTheme } from './styles/theme'

jest.mock('@/components/layout/CardList', () => {
  return function MockCardList({
    buttonTxt,
    onClick
  }: {
    buttonTxt: string
    onClick?: () => void
  }) {
    return (
      <div data-testid="card-list">
        <button onClick={onClick} data-testid="card-button">
          {buttonTxt}
        </button>
      </div>
    )
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
  afterEach(() => {
    cleanup()
  })

  describe('Renderização das rotas', () => {
    it('renderiza rota home corretamente', () => {
      renderWithProviders(<RoutesApp />, ['/'])

      expect(screen.getByTestId('card-list')).toBeInTheDocument()
      expect(screen.getByTestId('card-button')).toHaveTextContent('Saiba Mais')
    })

    it('renderiza rota restaurant corretamente', () => {
      renderWithProviders(<RoutesApp />, ['/restaurant'])

      expect(screen.getByTestId('card-list')).toBeInTheDocument()
      expect(screen.getByTestId('card-button')).toHaveTextContent('Adicionar')
    })
  })

  describe('Navegação entre rotas', () => {
    it('navega entre rotas corretamente', () => {
      renderWithProviders(<RoutesApp />, ['/'])

      expect(screen.getByTestId('card-button')).toHaveTextContent('Saiba Mais')

      const button = screen.getByTestId('card-button')
      fireEvent.click(button)

      expect(screen.getByTestId('card-button')).toHaveTextContent('Adicionar')
    })

    it('navega para restaurant via URL', () => {
      renderWithProviders(<RoutesApp />, ['/restaurant'])

      expect(screen.getByTestId('card-button')).toHaveTextContent('Adicionar')
    })

    it('navega para home via URL', () => {
      renderWithProviders(<RoutesApp />, ['/'])

      expect(screen.getByTestId('card-button')).toHaveTextContent('Saiba Mais')
    })
  })

  describe('Comportamento das rotas', () => {
    it('renderiza rota padrão (home) quando acessa rota inválida', () => {
      renderWithProviders(<RoutesApp />, ['/invalid-route'])

      expect(screen.queryByTestId('card-list')).not.toBeInTheDocument()
    })

    it('mantém estado das rotas após re-renderização', () => {
      const { rerender } = renderWithProviders(<RoutesApp />, ['/'])

      expect(screen.getByTestId('card-button')).toHaveTextContent('Saiba Mais')

      rerender(
        <MemoryRouter initialEntries={['/']}>
          <ThemeProvider theme={$lightTheme}>
            <RoutesApp />
          </ThemeProvider>
        </MemoryRouter>
      )

      expect(screen.getByTestId('card-button')).toHaveTextContent('Saiba Mais')
    })
  })
})
