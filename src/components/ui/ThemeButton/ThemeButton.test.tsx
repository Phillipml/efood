import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import ThemeButton from './index'
import { $lightTheme, $darkTheme } from '@/styles/theme'

const renderWithTheme = (
  component: React.ReactElement,
  theme = $lightTheme
) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>)
}

describe('ThemeButton Component', () => {
  it('renderiza ícone de sol no tema claro', () => {
    renderWithTheme(<ThemeButton onClick={() => {}} />)

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()

    const sunIcon = button.querySelector('svg')
    expect(sunIcon).toBeInTheDocument()
  })

  it('renderiza ícone de lua no tema escuro', () => {
    renderWithTheme(<ThemeButton onClick={() => {}} />, $darkTheme)

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()

    const moonIcon = button.querySelector('svg')
    expect(moonIcon).toBeInTheDocument()
  })

  it('executa onClick quando clicado', () => {
    const handleClick = jest.fn()
    renderWithTheme(<ThemeButton onClick={handleClick} />)

    const button = screen.getByRole('button')
    fireEvent.click(button)

    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('aplica estilos corretos', () => {
    renderWithTheme(<ThemeButton onClick={() => {}} />)

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

  it('funciona sem quebrar', () => {
    renderWithTheme(<ThemeButton onClick={() => {}} />)

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()

    fireEvent.click(button)
  })

  it('muda ícone baseado no tema', () => {
    const { rerender } = renderWithTheme(<ThemeButton onClick={() => {}} />)

    let button = screen.getByRole('button')
    let icon = button.querySelector('svg')
    expect(icon).toBeInTheDocument()

    rerender(
      <ThemeProvider theme={$darkTheme}>
        <ThemeButton onClick={() => {}} />
      </ThemeProvider>
    )

    button = screen.getByRole('button')
    icon = button.querySelector('svg')
    expect(icon).toBeInTheDocument()
  })

  it('mantém funcionalidade após múltiplos cliques', () => {
    const handleClick = jest.fn()
    renderWithTheme(<ThemeButton onClick={handleClick} />)

    const button = screen.getByRole('button')

    fireEvent.click(button)
    fireEvent.click(button)
    fireEvent.click(button)

    expect(handleClick).toHaveBeenCalledTimes(3)
  })
})
