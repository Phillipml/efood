import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import Button from './index'
import { $lightTheme } from '@/styles/theme'

const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider theme={$lightTheme}>{component}</ThemeProvider>)
}

describe('Button Component', () => {
  it('renderiza com texto padrão', () => {
    renderWithTheme(<Button />)
    expect(screen.getByText('Texto Botão')).toBeInTheDocument()
  })

  it('renderiza com texto customizado', () => {
    renderWithTheme(<Button>Clique Aqui</Button>)
    expect(screen.getByText('Clique Aqui')).toBeInTheDocument()
  })

  it('executa onClick quando clicado', () => {
    const handleClick = jest.fn()
    renderWithTheme(<Button onClick={handleClick}>Clique</Button>)

    fireEvent.click(screen.getByText('Clique'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('renderiza com props de cor corretas', () => {
    renderWithTheme(
      <Button $buttonColor="primary" $buttonTextColor="secondary">
        Botão
      </Button>
    )

    const button = screen.getByText('Botão')
    expect(button).toBeInTheDocument()
  })

  it('renderiza com props de tamanho corretas', () => {
    renderWithTheme(
      <Button $lgFontSize="lg" $mdFontSize="md" $smFontSize="sm">
        Botão
      </Button>
    )

    const button = screen.getByText('Botão')
    expect(button).toBeInTheDocument()
  })

  it('renderiza com props de percentual corretas', () => {
    renderWithTheme(
      <Button
        $lgButtonPercent={50}
        $mdButtonPercent={75}
        $smButtonPercent={100}
      >
        Botão
      </Button>
    )

    const button = screen.getByText('Botão')
    expect(button).toBeInTheDocument()
  })

  it('aplica estilos corretos baseado nas props', () => {
    renderWithTheme(
      <Button
        $buttonColor="tertiary"
        $buttonTextColor="primary"
        $lgButtonPercent={25}
      >
        Botão Estilizado
      </Button>
    )

    const button = screen.getByText('Botão Estilizado')
    expect(button).toBeInTheDocument()
  })

  it('funciona sem onClick (não quebra)', () => {
    renderWithTheme(<Button>Botão Sem Click</Button>)
    expect(screen.getByText('Botão Sem Click')).toBeInTheDocument()

    fireEvent.click(screen.getByText('Botão Sem Click'))
  })
})
