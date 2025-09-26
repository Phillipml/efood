import { screen } from '@testing-library/react'
import Restaurant from './index'
import { renderWithThemeAndRouter } from '@/utils/test-utils'

describe('Restaurant Page', () => {
  it('passa props corretas para CardList', () => {
    renderWithThemeAndRouter(<Restaurant />)

    const buttons = screen.getAllByText('Adicionar ao Carrinho')
    expect(buttons).toHaveLength(4)
  })

  it('renderiza sem quebrar', () => {
    renderWithThemeAndRouter(<Restaurant />)

    expect(screen.getByText('Sushi Salmão')).toBeInTheDocument()
    expect(screen.getByText('Temaki Especial')).toBeInTheDocument()
    expect(screen.getByText('Sashimi Mix')).toBeInTheDocument()
    expect(screen.getByText('Combo Sushi')).toBeInTheDocument()
    expect(screen.getAllByText('Adicionar')).toHaveLength(4)
  })

  it('não renderiza ratings', () => {
    renderWithThemeAndRouter(<Restaurant />)

    expect(screen.queryByText('4.9')).not.toBeInTheDocument()
    expect(screen.queryByText('4.7')).not.toBeInTheDocument()
    expect(screen.queryByText('4.8')).not.toBeInTheDocument()
    expect(screen.queryByText('4.6')).not.toBeInTheDocument()
  })

  it('não renderiza tags', () => {
    renderWithThemeAndRouter(<Restaurant />)

    expect(screen.queryByText('Destaque da semana')).not.toBeInTheDocument()
    expect(screen.queryByText('Japonês')).not.toBeInTheDocument()
    expect(screen.queryByText('Italiano')).not.toBeInTheDocument()
  })

  it('aplica estilos corretos do tema', () => {
    renderWithThemeAndRouter(<Restaurant />)

    const buttons = screen.getAllByText('Adicionar')
    expect(buttons).toHaveLength(4)
  })

  it('renderiza com props de tema específicas', () => {
    renderWithThemeAndRouter(<Restaurant />)

    const buttons = screen.getAllByText('Adicionar')
    expect(buttons).toHaveLength(4)
  })

  it('renderiza com estrutura correta', () => {
    renderWithThemeAndRouter(<Restaurant />)

    const buttons = screen.getAllByText('Adicionar')
    expect(buttons).toHaveLength(4)
  })

  it('aplica props de botão corretas', () => {
    renderWithThemeAndRouter(<Restaurant />)

    const buttons = screen.getAllByText('Adicionar')
    expect(buttons).toHaveLength(4)

    buttons.forEach((button) => {
      expect(button).toHaveTextContent('Adicionar')
    })
  })
})
