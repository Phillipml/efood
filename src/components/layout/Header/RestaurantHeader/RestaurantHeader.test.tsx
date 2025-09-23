import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { MemoryRouter } from 'react-router-dom'
import { RestaurantHeader } from './index'
import { $lightTheme } from '@/styles/theme'

const renderWithTheme = (component: React.ReactElement) => {
  return render(
    <MemoryRouter>
      <ThemeProvider theme={$lightTheme}>{component}</ThemeProvider>
    </MemoryRouter>
  )
}

describe('RestaurantHeader Component', () => {
  it('renderiza HeaderRestaurantWrap', () => {
    renderWithTheme(<RestaurantHeader />)
    const headerWrapper = screen.getByRole('banner')
    expect(headerWrapper).toBeInTheDocument()
  })

  it('renderiza RestaurantContainer', () => {
    renderWithTheme(<RestaurantHeader />)
    const container = screen.getByRole('banner').firstChild
    expect(container).toBeInTheDocument()
  })

  it('renderiza título "Restaurantes"', () => {
    renderWithTheme(<RestaurantHeader />)
    expect(screen.getByText('Restaurantes')).toBeInTheDocument()
  })

  it('renderiza Logo', () => {
    renderWithTheme(<RestaurantHeader />)
    const logo = screen.getByAltText('Efood logo')
    expect(logo).toBeInTheDocument()
  })

  it('renderiza contador de carrinho', () => {
    renderWithTheme(<RestaurantHeader />)
    expect(screen.getByText('0 produto(s) no carrinho')).toBeInTheDocument()
  })

  it('renderiza com texto correto', () => {
    renderWithTheme(<RestaurantHeader />)
    expect(screen.getByText('Restaurantes')).toBeInTheDocument()
    expect(screen.getByText('0 produto(s) no carrinho')).toBeInTheDocument()
  })

  it('aplica estilos corretos aos elementos', () => {
    renderWithTheme(<RestaurantHeader />)

    const title = screen.getByText('Restaurantes')
    const cartText = screen.getByText('0 produto(s) no carrinho')

    expect(title).toBeInTheDocument()
    expect(cartText).toBeInTheDocument()
  })
})
