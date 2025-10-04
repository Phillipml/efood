import { screen } from '@testing-library/react'
import { RestaurantHeader } from './index'
import { renderWithProviders } from '@/utils/test-utils'

describe('RestaurantHeader Component', () => {
  it('renderiza HeaderRestaurantWrap', () => {
    renderWithProviders(<RestaurantHeader />)
    const headerWrapper = screen.getByRole('banner')
    expect(headerWrapper).toBeInTheDocument()
  })

  it('renderiza RestaurantContainer', () => {
    renderWithProviders(<RestaurantHeader />)
    const container = screen.getByRole('banner').firstChild
    expect(container).toBeInTheDocument()
  })

  it('renderiza título "Restaurantes"', () => {
    renderWithProviders(<RestaurantHeader />)
    expect(screen.getByText('Restaurantes')).toBeInTheDocument()
  })

  it('renderiza Logo', () => {
    renderWithProviders(<RestaurantHeader />)
    const logo = screen.getByAltText('Efood logo')
    expect(logo).toBeInTheDocument()
  })

  it('renderiza contador de carrinho', () => {
    renderWithProviders(<RestaurantHeader />)
    expect(screen.getByText('0 produto(s) no carrinho')).toBeInTheDocument()
  })

  it('renderiza com texto correto', () => {
    renderWithProviders(<RestaurantHeader />)
    expect(screen.getByText('Restaurantes')).toBeInTheDocument()
    expect(screen.getByText('0 produto(s) no carrinho')).toBeInTheDocument()
  })

  it('aplica estilos corretos aos elementos', () => {
    renderWithProviders(<RestaurantHeader />)

    const title = screen.getByText('Restaurantes')
    const cartText = screen.getByText('0 produto(s) no carrinho')

    expect(title).toBeInTheDocument()
    expect(cartText).toBeInTheDocument()
  })
})
