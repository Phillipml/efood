import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Logo } from './index'
import { $lightTheme } from '@/styles/theme'

const renderWithProviders = (component: React.ReactElement) => {
  return render(
    <BrowserRouter>
      <ThemeProvider theme={$lightTheme}>{component}</ThemeProvider>
    </BrowserRouter>
  )
}

describe('Logo Component', () => {
  it('renderiza corretamente', () => {
    renderWithProviders(<Logo />)

    const logo = screen.getByAltText('Efood logo')
    expect(logo).toBeInTheDocument()
    expect(logo).toHaveAttribute('src')
  })

  it('aplica props de tamanho corretas', () => {
    renderWithProviders(<Logo $lgRem={48} $mdRem={36} $smRem={24} />)

    const logo = screen.getByAltText('Efood logo')
    expect(logo).toBeInTheDocument()
  })

  it('aplica props de cor corretas', () => {
    renderWithProviders(<Logo $lgRem={40} />)

    const logo = screen.getByAltText('Efood logo')
    expect(logo).toBeInTheDocument()
  })

  it('tem link para home', () => {
    renderWithProviders(<Logo />)

    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/')
  })

  it('renderiza com tamanho padrão', () => {
    renderWithProviders(<Logo />)

    const logo = screen.getByAltText('Efood logo')
    expect(logo).toBeInTheDocument()
  })

  it('funciona com diferentes tamanhos responsivos', () => {
    renderWithProviders(<Logo $lgRem={60} $mdRem={40} $smRem={30} />)

    const logo = screen.getByAltText('Efood logo')
    expect(logo).toBeInTheDocument()
  })
})
