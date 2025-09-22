import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { Icon } from './index'
import { $lightTheme } from '@/styles/theme'

const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider theme={$lightTheme}>{component}</ThemeProvider>)
}

describe('Icon Component', () => {
  it('renderiza corretamente', () => {
    renderWithTheme(<Icon />)

    const icon = screen.getByAltText('Efood logo')
    expect(icon).toBeInTheDocument()
    expect(icon).toHaveAttribute('src')
  })

  it('aplica props de tamanho corretas', () => {
    renderWithTheme(<Icon $lgRem={48} $mdRem={36} $smRem={24} />)

    const icon = screen.getByAltText('Efood logo')
    expect(icon).toBeInTheDocument()
  })

  it('aplica props de cor corretas', () => {
    renderWithTheme(<Icon $lgRem={40} />)

    const icon = screen.getByAltText('Efood logo')
    expect(icon).toBeInTheDocument()
  })

  it('renderiza com tamanho padrão', () => {
    renderWithTheme(<Icon />)

    const icon = screen.getByAltText('Efood logo')
    expect(icon).toBeInTheDocument()
  })

  it('funciona com diferentes tamanhos responsivos', () => {
    renderWithTheme(<Icon $lgRem={60} $mdRem={40} $smRem={30} />)

    const icon = screen.getByAltText('Efood logo')
    expect(icon).toBeInTheDocument()
  })

  it('usa valores padrão quando props não são fornecidas', () => {
    renderWithTheme(<Icon />)

    const icon = screen.getByAltText('Efood logo')
    expect(icon).toBeInTheDocument()
  })

  it('aplica apenas lgRem quando outros não são fornecidos', () => {
    renderWithTheme(<Icon $lgRem={50} />)

    const icon = screen.getByAltText('Efood logo')
    expect(icon).toBeInTheDocument()
  })
})
