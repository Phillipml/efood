import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { FaStar } from 'react-icons/fa6'
import { Text } from './index'
import { $lightTheme } from '@/styles/theme'

const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider theme={$lightTheme}>{component}</ThemeProvider>)
}

describe('Text Component', () => {
  it('renderiza como "p" por padrão', () => {
    renderWithTheme(<Text>Texto padrão</Text>)
    const textElement = screen.getByText('Texto padrão')
    expect(textElement.tagName).toBe('P')
  })

  it('renderiza como "span" quando especificado', () => {
    renderWithTheme(<Text as="span">Texto span</Text>)
    const textElement = screen.getByText('Texto span')
    expect(textElement.tagName).toBe('SPAN')
  })

  it('renderiza como "title" quando especificado', () => {
    renderWithTheme(<Text as="title">Título</Text>)
    const textElement = screen.getByText('Título')
    expect(textElement.tagName).toBe('H2')
  })

  it('renderiza children corretamente', () => {
    renderWithTheme(
      <Text>
        <span>Texto com</span> <strong>formatação</strong>
      </Text>
    )
    expect(screen.getByText('Texto com')).toBeInTheDocument()
    expect(screen.getByText('formatação')).toBeInTheDocument()
  })

  it('aplica props de cor corretas', () => {
    renderWithTheme(
      <Text
        $textColor="primary"
        $textDarkTheme="secondary"
        $textLightTheme="tertiary"
      >
        Texto colorido
      </Text>
    )

    const textElement = screen.getByText('Texto colorido')
    expect(textElement).toBeInTheDocument()
  })

  it('aplica props de tamanho corretas', () => {
    renderWithTheme(
      <Text $lgFontSize="xl" $mdFontSize="lg" $smFontSize="md">
        Texto com tamanhos
      </Text>
    )

    const textElement = screen.getByText('Texto com tamanhos')
    expect(textElement).toBeInTheDocument()
  })

  it('renderiza com ícones (JSX children)', () => {
    renderWithTheme(
      <Text>
        Texto com <FaStar data-testid="star" /> ícone
      </Text>
    )

    expect(screen.getByText(/Texto com/)).toBeInTheDocument()
    expect(screen.getByTestId('star')).toBeInTheDocument()
    expect(screen.getByText(/ícone/)).toBeInTheDocument()
  })

  it('aplica alinhamento central quando especificado', () => {
    renderWithTheme(<Text $alignCenter={true}>Texto centralizado</Text>)

    const textElement = screen.getByText('Texto centralizado')
    expect(textElement).toBeInTheDocument()
  })

  it('aplica props de tema corretas para title', () => {
    renderWithTheme(
      <Text
        as="title"
        $textColor="quaternary"
        $textDarkTheme="quinary"
        $textLightTheme="primary"
      >
        Título com tema
      </Text>
    )

    const titleElement = screen.getByText('Título com tema')
    expect(titleElement).toBeInTheDocument()
    expect(titleElement.tagName).toBe('H2')
  })
})
