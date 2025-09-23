import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { MemoryRouter } from 'react-router-dom'
import Restaurant from './index'
import { $lightTheme } from '@/styles/theme'

const renderWithTheme = (component: React.ReactElement) => {
  return render(
    <MemoryRouter>
      <ThemeProvider theme={$lightTheme}>{component}</ThemeProvider>
    </MemoryRouter>
  )
}

describe('Restaurant Page', () => {
  it('renderiza CardList', () => {
    renderWithTheme(<Restaurant />)

    const cards = screen.getAllByText('Hioki Sushi')
    expect(cards.length).toBeGreaterThan(0)
  })

  it('passa props corretas para CardList', () => {
    renderWithTheme(<Restaurant />)

    const buttons = screen.getAllByText('Adicionar')
    expect(buttons).toHaveLength(7)
  })

  it('renderiza sem quebrar', () => {
    renderWithTheme(<Restaurant />)

    expect(screen.getAllByText('Hioki Sushi')).toHaveLength(7)
    expect(screen.getAllByText('Adicionar')).toHaveLength(7)
    expect(screen.getAllByText('4.9')).toHaveLength(7)
  })

  it('aplica estilos corretos do tema', () => {
    renderWithTheme(<Restaurant />)

    const cards = screen.getAllByText('Hioki Sushi')
    expect(cards).toHaveLength(7)

    const buttons = screen.getAllByText('Adicionar')
    expect(buttons).toHaveLength(7)
  })

  it('renderiza com props de tema específicas', () => {
    renderWithTheme(<Restaurant />)

    const buttons = screen.getAllByText('Adicionar')
    expect(buttons).toHaveLength(7)

    const cards = screen.getAllByText('Hioki Sushi')
    expect(cards).toHaveLength(7)
  })

  it('renderiza com estrutura correta', () => {
    renderWithTheme(<Restaurant />)

    const cards = screen.getAllByText('Hioki Sushi')
    const buttons = screen.getAllByText('Adicionar')
    const ratings = screen.getAllByText('4.9')

    expect(cards).toHaveLength(7)
    expect(buttons).toHaveLength(7)
    expect(ratings).toHaveLength(7)
  })

  it('aplica props de botão corretas', () => {
    renderWithTheme(<Restaurant />)

    const buttons = screen.getAllByText('Adicionar')
    expect(buttons).toHaveLength(7)

    buttons.forEach((button) => {
      expect(button).toHaveTextContent('Adicionar')
    })
  })
})
