import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import CardList from '.'
import { $lightTheme } from '@/styles/theme'

const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider theme={$lightTheme}>{component}</ThemeProvider>)
}

describe('CardList Component', () => {
  it('renderiza Container com children', () => {
    const mockChildren = <div data-testid="test-child">Conteúdo de teste</div>

    renderWithTheme(<CardList>{mockChildren}</CardList>)

    expect(screen.getByTestId('test-child')).toBeInTheDocument()
  })

  it('renderiza múltiplos children', () => {
    const mockChildren = (
      <>
        <div data-testid="child-1">Child 1</div>
        <div data-testid="child-2">Child 2</div>
        <div data-testid="child-3">Child 3</div>
      </>
    )

    renderWithTheme(<CardList>{mockChildren}</CardList>)

    expect(screen.getByTestId('child-1')).toBeInTheDocument()
    expect(screen.getByTestId('child-2')).toBeInTheDocument()
    expect(screen.getByTestId('child-3')).toBeInTheDocument()
  })

  it('aceita key prop', () => {
    const mockChildren = <div data-testid="test-child">Conteúdo de teste</div>

    renderWithTheme(<CardList key={123}>{mockChildren}</CardList>)

    expect(screen.getByTestId('test-child')).toBeInTheDocument()
  })

  it('renderiza sem children', () => {
    renderWithTheme(<CardList>{null}</CardList>)

    const containers = screen.getAllByRole('generic')
    expect(containers.length).toBeGreaterThan(0)
  })

  it('renderiza com children complexos', () => {
    const mockChildren = (
      <div>
        <h2>Título</h2>
        <p>Descrição</p>
        <button>Botão</button>
      </div>
    )

    renderWithTheme(<CardList>{mockChildren}</CardList>)

    expect(screen.getByText('Título')).toBeInTheDocument()
    expect(screen.getByText('Descrição')).toBeInTheDocument()
    expect(screen.getByText('Botão')).toBeInTheDocument()
  })

  it('renderiza com array de children', () => {
    const mockChildren = [
      <div key="1" data-testid="array-child-1">
        Array Child 1
      </div>,
      <div key="2" data-testid="array-child-2">
        Array Child 2
      </div>
    ]

    renderWithTheme(<CardList>{mockChildren}</CardList>)

    expect(screen.getByTestId('array-child-1')).toBeInTheDocument()
    expect(screen.getByTestId('array-child-2')).toBeInTheDocument()
  })
})
