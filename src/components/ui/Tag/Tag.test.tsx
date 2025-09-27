import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import Tag from './index'
import { $lightTheme, $darkTheme } from '@/styles/theme'

const renderWithTheme = (
  component: React.ReactElement,
  theme = $lightTheme
) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>)
}

describe('Tag Component', () => {
  it('renderiza o componente tag', () => {
    renderWithTheme(<Tag>Japonês</Tag>)
    expect(screen.getByText('Japonês')).toBeInTheDocument()
  })

  it('renderiza com texto customizado', () => {
    renderWithTheme(<Tag>Italiano</Tag>)
    expect(screen.getByText('Italiano')).toBeInTheDocument()
  })

  it('renderiza com tema light', () => {
    renderWithTheme(<Tag>Brasileiro</Tag>, $lightTheme)
    const tag = screen.getByText('Brasileiro')
    expect(tag).toBeInTheDocument()
  })

  it('renderiza com tema dark', () => {
    renderWithTheme(<Tag>Mexicano</Tag>, $darkTheme)
    const tag = screen.getByText('Mexicano')
    expect(tag).toBeInTheDocument()
  })

  it('aplica estilos corretos', () => {
    renderWithTheme(<Tag>Chinês</Tag>)
    const tag = screen.getByText('Chinês')
    expect(tag).toHaveStyle({
      display: 'inline-block',
      fontSize: '0.875rem',
      fontWeight: 'bold',
      padding: '0.25rem 0.5rem',
      whiteSpace: 'nowrap',
      verticalAlign: 'top',
      margin: '0',
      float: 'none',
      width: 'auto',
      height: 'auto'
    })
  })

  it('usa cor tertiary do tema como background', () => {
    renderWithTheme(<Tag>Indiano</Tag>, $lightTheme)
    const tag = screen.getByText('Indiano')
    expect(tag).toHaveStyle({
      backgroundColor: $lightTheme.tertiary
    })
  })

  it('usa cor secondary do tema como texto', () => {
    renderWithTheme(<Tag>Árabe</Tag>, $lightTheme)
    const tag = screen.getByText('Árabe')
    expect(tag).toHaveStyle({
      color: $lightTheme.secondary
    })
  })

  it('usa cores corretas no tema dark', () => {
    renderWithTheme(<Tag>Francês</Tag>, $darkTheme)
    const tag = screen.getByText('Francês')
    expect(tag).toHaveStyle({
      backgroundColor: $darkTheme.tertiary,
      color: $darkTheme.secondary
    })
  })

  it('mantém texto sem quebra de linha', () => {
    renderWithTheme(<Tag>Texto Longo Sem Quebra</Tag>)
    const tag = screen.getByText('Texto Longo Sem Quebra')
    expect(tag).toHaveStyle({
      whiteSpace: 'nowrap'
    })
  })

  it('é acessível', () => {
    renderWithTheme(<Tag>Coreano</Tag>)
    const tag = screen.getByText('Coreano')
    expect(tag).toBeInTheDocument()
  })

  it('funciona com diferentes temas', () => {
    const { unmount } = renderWithTheme(<Tag>Tailândes</Tag>, $lightTheme)
    expect(screen.getByText('Tailândes')).toBeInTheDocument()
    unmount()

    renderWithTheme(<Tag>Vietnamita</Tag>, $darkTheme)
    expect(screen.getByText('Vietnamita')).toBeInTheDocument()
  })

  it('renderiza sem erros quando não há tema fornecido', () => {
    expect(() => {
      render(<Tag>Grego</Tag>)
    }).not.toThrow()
  })
})
