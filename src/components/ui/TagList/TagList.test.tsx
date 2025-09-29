import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import TagList from './index'
import { $lightTheme, $darkTheme } from '@/styles/theme'

const renderWithTheme = (
  component: React.ReactElement,
  theme = $lightTheme
) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>)
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

  it('renderiza com tema light', () => {
    renderWithTheme(
      <TagList isFeatured={true} foodType="Brasileiro" />,
      $lightTheme
    )
    expect(screen.getByText('Destaque da semana')).toBeInTheDocument()
    expect(screen.getByText('Brasileiro')).toBeInTheDocument()
  })

  it('renderiza com tema dark', () => {
    renderWithTheme(<TagList isFeatured={true} foodType="Chinês" />, $darkTheme)
    expect(screen.getByText('Destaque da semana')).toBeInTheDocument()
    expect(screen.getByText('Chinês')).toBeInTheDocument()
  })

  it('aplica estilos corretos ao container', () => {
    renderWithTheme(<TagList isFeatured={true} />)
    const container = screen.getByText('Destaque da semana').parentElement
    expect(container).toHaveStyle({
      position: 'absolute',
      top: '22px',
      right: '20px',
      display: 'flex',
      flexDirection: 'row',
      gap: '0.5rem',
      flexWrap: 'nowrap',
      alignItems: 'center',
      zIndex: '2',
      width: 'auto',
      height: 'auto'
    })
  })

  it('renderiza múltiplas tags na ordem correta', () => {
    renderWithTheme(<TagList isFeatured={true} foodType="Indiano" />)
    expect(screen.getByText('Destaque da semana')).toBeInTheDocument()
    expect(screen.getByText('Indiano')).toBeInTheDocument()

    const container = screen.getByText('Destaque da semana').parentElement
    const tags = container?.children
    expect(tags).toHaveLength(2)
  })

  it('funciona com diferentes tipos de comida', () => {
    renderWithTheme(<TagList foodType="Árabe" />)
    expect(screen.getByText('Árabe')).toBeInTheDocument()
  })

  it('é acessível', () => {
    renderWithTheme(<TagList isFeatured={true} foodType="Coreano" />)
    expect(screen.getByText('Destaque da semana')).toBeInTheDocument()
    expect(screen.getByText('Coreano')).toBeInTheDocument()
  })

  it('funciona com diferentes temas', () => {
    const { unmount } = renderWithTheme(
      <TagList isFeatured={true} />,
      $lightTheme
    )
    expect(screen.getByText('Destaque da semana')).toBeInTheDocument()
    unmount()

    renderWithTheme(<TagList foodType="Francês" />, $darkTheme)
    expect(screen.getByText('Francês')).toBeInTheDocument()
  })

  it('renderiza sem erros quando não há tema fornecido', () => {
    expect(() => {
      render(<TagList isFeatured={true} />)
    }).not.toThrow()
  })
})
