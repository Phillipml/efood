import { screen } from '@testing-library/react'
import Restaurant from './index'
import { renderWithThemeAndRouter } from '@/utils/test-utils'

describe('Restaurant Page', () => {
  it('renderiza CardList', () => {
    renderWithThemeAndRouter(<Restaurant />)

    const cards = screen.getAllByText('Hioki Sushi')
    expect(cards.length).toBeGreaterThan(0)
  })

  it('passa props corretas para CardList', () => {
    renderWithThemeAndRouter(<Restaurant />)

    const buttons = screen.getAllByText('Adicionar')
    expect(buttons).toHaveLength(7)
  })

  it('renderiza sem quebrar', () => {
    renderWithThemeAndRouter(<Restaurant />)

    expect(screen.getAllByText('Hioki Sushi')).toHaveLength(7)
    expect(screen.getAllByText('Adicionar')).toHaveLength(7)
    expect(screen.getAllByText('4.9')).toHaveLength(7)
  })

  it('aplica estilos corretos do tema', () => {
    renderWithThemeAndRouter(<Restaurant />)

    const cards = screen.getAllByText('Hioki Sushi')
    expect(cards).toHaveLength(7)

    const buttons = screen.getAllByText('Adicionar')
    expect(buttons).toHaveLength(7)
  })

  it('renderiza com props de tema específicas', () => {
    renderWithThemeAndRouter(<Restaurant />)

    const buttons = screen.getAllByText('Adicionar')
    expect(buttons).toHaveLength(7)

    const cards = screen.getAllByText('Hioki Sushi')
    expect(cards).toHaveLength(7)
  })

  it('renderiza com estrutura correta', () => {
    renderWithThemeAndRouter(<Restaurant />)

    const cards = screen.getAllByText('Hioki Sushi')
    const buttons = screen.getAllByText('Adicionar')
    const ratings = screen.getAllByText('4.9')

    expect(cards).toHaveLength(7)
    expect(buttons).toHaveLength(7)
    expect(ratings).toHaveLength(7)
  })

  it('aplica props de botão corretas', () => {
    renderWithThemeAndRouter(<Restaurant />)

    const buttons = screen.getAllByText('Adicionar')
    expect(buttons).toHaveLength(7)

    buttons.forEach((button) => {
      expect(button).toHaveTextContent('Adicionar')
    })
  })
})
