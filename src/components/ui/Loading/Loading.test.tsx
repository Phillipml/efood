import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import Loading from './index'
import { $lightTheme, $darkTheme } from '@/styles/theme'

const renderWithTheme = (
  component: React.ReactElement,
  theme = $lightTheme
) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>)
}

describe('Loading Component', () => {
  it('renderiza o componente de loading', () => {
    renderWithTheme(<Loading />)
    const loadingContainer = screen.getByTestId('loading-container')
    expect(loadingContainer).toBeInTheDocument()
  })

  it('aplica estilos corretos ao container', () => {
    renderWithTheme(<Loading />)
    const loadingContainer = screen.getByTestId('loading-container')
    expect(loadingContainer).toHaveStyle({
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem'
    })
  })

  it('renderiza o BounceLoader', () => {
    renderWithTheme(<Loading />)
    const bounceLoader = screen
      .getByTestId('loading-container')
      .querySelector('span')
    expect(bounceLoader).toBeInTheDocument()
  })

  it('renderiza com tema light', () => {
    renderWithTheme(<Loading />, $lightTheme)
    const bounceLoader = screen
      .getByTestId('loading-container')
      .querySelector('span')
    expect(bounceLoader).toBeInTheDocument()
  })

  it('renderiza com tema dark', () => {
    renderWithTheme(<Loading />, $darkTheme)
    const bounceLoader = screen
      .getByTestId('loading-container')
      .querySelector('span')
    expect(bounceLoader).toBeInTheDocument()
  })

  it('mantém estrutura correta do container', () => {
    renderWithTheme(<Loading />)
    const container = screen.getByTestId('loading-container')
    expect(container).toBeInTheDocument()
    expect(container.children).toHaveLength(1)
  })

  it('é acessível', () => {
    renderWithTheme(<Loading />)
    const container = screen.getByTestId('loading-container')
    expect(container).toBeInTheDocument()
  })

  it('funciona com diferentes temas', () => {
    const { unmount } = renderWithTheme(<Loading />, $lightTheme)
    expect(screen.getByTestId('loading-container')).toBeInTheDocument()
    unmount()

    renderWithTheme(<Loading />, $darkTheme)
    expect(screen.getByTestId('loading-container')).toBeInTheDocument()
  })

  it('lança erro quando não há tema fornecido', () => {
    expect(() => {
      render(<Loading />)
    }).toThrow(
      'ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`'
    )
  })
})
