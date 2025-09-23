import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { MemoryRouter } from 'react-router-dom'
import Footer from './index'
import { $lightTheme } from '@/styles/theme'

const renderWithTheme = (component: React.ReactElement) => {
  return render(
    <MemoryRouter>
      <ThemeProvider theme={$lightTheme}>{component}</ThemeProvider>
    </MemoryRouter>
  )
}

describe('Footer Component', () => {
  it('renderiza Footer corretamente', () => {
    renderWithTheme(<Footer />)
    const footer = screen.getByRole('contentinfo')
    expect(footer).toBeInTheDocument()
  })

  it('renderiza conteúdo esperado', () => {
    renderWithTheme(<Footer />)

    // Verifica se o logo está presente
    const logo = screen.getByAltText('Efood logo')
    expect(logo).toBeInTheDocument()

    // Verifica se o texto principal está presente
    expect(
      screen.getByText(
        /A efood é uma plataforma para divulgação de estabelecimentos/
      )
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        /a responsibilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado/
      )
    ).toBeInTheDocument()
  })

  it('renderiza ícones de redes sociais', () => {
    renderWithTheme(<Footer />)

    // Verifica se os links das redes sociais estão presentes
    const socialLinks = screen.getAllByRole('link')
    expect(socialLinks).toHaveLength(4) // Logo + Instagram, Facebook, Twitter
  })

  it('renderiza Container com estrutura correta', () => {
    renderWithTheme(<Footer />)

    const footer = screen.getByRole('contentinfo')
    const container = footer.firstChild

    expect(container).toBeInTheDocument()
  })

  it('renderiza logo com tamanho correto', () => {
    renderWithTheme(<Footer />)

    const logo = screen.getByAltText('Efood logo')
    expect(logo).toBeInTheDocument()
  })

  it('renderiza texto com estilos corretos', () => {
    renderWithTheme(<Footer />)

    const text = screen.getByText(/A efood é uma plataforma/)
    expect(text).toBeInTheDocument()
  })

  it('renderiza links de redes sociais com href correto', () => {
    renderWithTheme(<Footer />)

    const socialLinks = screen.getAllByRole('link')

    socialLinks.forEach((link) => {
      expect(link).toHaveAttribute('href', '/')
    })
  })

  it('aplica estilos de tema corretos', () => {
    renderWithTheme(<Footer />)

    const footer = screen.getByRole('contentinfo')
    expect(footer).toBeInTheDocument()
  })
})
