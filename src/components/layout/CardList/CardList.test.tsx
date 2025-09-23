import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import CardList from '.'
import { $lightTheme } from '@/styles/theme'

const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider theme={$lightTheme}>{component}</ThemeProvider>)
}

describe('CardList Component', () => {
  it('renderiza Container', () => {
    renderWithTheme(<CardList buttonTxt="Ver Cardápio" />)

    const cards = screen.getAllByText('Hioki Sushi')
    expect(cards.length).toBeGreaterThan(0)
  })

  it('renderiza múltiplos Cards', () => {
    renderWithTheme(<CardList buttonTxt="Ver Cardápio" />)

    const cards = screen.getAllByText('Hioki Sushi')
    expect(cards).toHaveLength(7)
  })

  it('passa props corretas para Cards', () => {
    const mockOnClick = jest.fn()
    const props = {
      buttonTxt: 'Ver Cardápio',
      $lgButtonPercent: 50,
      $mdButtonPercent: 75,
      $smButtonPercent: 100,
      $defaultColor: 'primary' as const,
      $darkTheme: 'secondary' as const,
      $lightTheme: 'primary' as const,
      $buttonColor: 'tertiary' as const,
      $buttonDarkThemeColor: 'primary' as const,
      $buttonLightThemeColor: 'secondary' as const,
      $buttonTextColor: 'primary' as const,
      $buttonTextDarkTheme: 'secondary' as const,
      $buttonTextLightTheme: 'primary' as const,
      $textColor: 'tertiary' as const,
      $textDarkTheme: 'primary' as const,
      $textLightTheme: 'secondary' as const,
      onClick: mockOnClick
    }

    renderWithTheme(<CardList {...props} />)

    const cards = screen.getAllByText('Hioki Sushi')
    expect(cards).toHaveLength(7)
  })

  it('executa onClick quando especificado', () => {
    const mockOnClick = jest.fn()
    renderWithTheme(<CardList buttonTxt="Ver Cardápio" onClick={mockOnClick} />)

    const buttons = screen.getAllByText('Ver Cardápio')
    fireEvent.click(buttons[0])

    expect(mockOnClick).toHaveBeenCalledTimes(1)
  })

  it('renderiza com dados corretos', () => {
    renderWithTheme(<CardList buttonTxt="Ver Cardápio" />)

    expect(screen.getAllByText('Hioki Sushi')).toHaveLength(7)
    expect(screen.getAllByText('4.9')).toHaveLength(7)
    expect(
      screen.getAllByText(/Peça já o melhor da culinária japonesa/)
    ).toHaveLength(7)
  })

  it('renderiza com props de tema corretas', () => {
    const themeProps = {
      $defaultColor: 'secondary' as const,
      $darkTheme: 'quaternary' as const,
      $lightTheme: 'primary' as const,
      $textColor: 'primary' as const,
      $textDarkTheme: 'secondary' as const,
      $textLightTheme: 'primary' as const
    }

    renderWithTheme(<CardList buttonTxt="Ver Cardápio" {...themeProps} />)

    const cards = screen.getAllByText('Hioki Sushi')
    expect(cards).toHaveLength(7)
  })

  it('renderiza com props de botão corretas', () => {
    const buttonProps = {
      buttonTxt: 'Pedir Agora',
      $buttonColor: 'primary' as const,
      $buttonTextColor: 'secondary' as const,
      $lgButtonPercent: 100,
      $mdButtonPercent: 80,
      $smButtonPercent: 90
    }

    renderWithTheme(<CardList {...buttonProps} />)

    const buttons = screen.getAllByText('Pedir Agora')
    expect(buttons).toHaveLength(7)
  })
})
