import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import TagList from './index'
import { $lightTheme } from '@/styles/theme'

const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider theme={$lightTheme}>{component}</ThemeProvider>)
}

describe('TagList Component', () => {
  it('renderiza tag de destaque quando isFeatured é true', () => {
    renderWithTheme(<TagList isFeatured={true} />)

    expect(screen.getByText('Destaque da semana')).toBeInTheDocument()
  })

  it('renderiza tag de tipo de comida quando foodType é fornecido', () => {
    renderWithTheme(<TagList foodType="Japonês" />)

    expect(screen.getByText('Japonês')).toBeInTheDocument()
  })

  it('renderiza ambas as tags quando isFeatured e foodType são fornecidos', () => {
    renderWithTheme(<TagList isFeatured={true} foodType="Italiano" />)

    expect(screen.getByText('Destaque da semana')).toBeInTheDocument()
    expect(screen.getByText('Italiano')).toBeInTheDocument()
  })

  it('não renderiza nada quando isFeatured e foodType não são fornecidos', () => {
    const { container } = renderWithTheme(<TagList />)

    expect(container.firstChild).toBeNull()
  })

  it('não renderiza nada quando isFeatured é false e foodType não é fornecido', () => {
    const { container } = renderWithTheme(<TagList isFeatured={false} />)

    expect(container.firstChild).toBeNull()
  })

  it('renderiza apenas foodType quando isFeatured é false', () => {
    renderWithTheme(<TagList isFeatured={false} foodType="Mexicano" />)

    expect(screen.getByText('Mexicano')).toBeInTheDocument()
    expect(screen.queryByText('Destaque da semana')).not.toBeInTheDocument()
  })
})
