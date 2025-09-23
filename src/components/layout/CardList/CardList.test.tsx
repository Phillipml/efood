import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import CardList, { type CardData } from '.'
import { $lightTheme } from '@/styles/theme'

const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider theme={$lightTheme}>{component}</ThemeProvider>)
}

const mockCardsData: CardData[] = [
  {
    id: '1',
    image: 'https://example.com/restaurant1.jpg',
    name: 'Restaurante 1',
    rating: 4.5,
    description: 'Descrição do restaurante 1',
    isFeatured: true,
    foodType: 'Japonês'
  },
  {
    id: '2',
    image: 'https://example.com/restaurant2.jpg',
    name: 'Restaurante 2',
    rating: 4.3,
    description: 'Descrição do restaurante 2',
    foodType: 'Italiano'
  },
  {
    id: '3',
    image: 'https://example.com/restaurant3.jpg',
    name: 'Restaurante 3',
    description: 'Descrição do restaurante 3'
  }
]

describe('CardList Component', () => {
  it('renderiza Container', () => {
    renderWithTheme(<CardList cards={mockCardsData} buttonTxt="Ver Cardápio" />)

    const cards = screen.getAllByText('Restaurante 1')
    expect(cards.length).toBeGreaterThan(0)
  })

  it('renderiza múltiplos Cards', () => {
    renderWithTheme(<CardList cards={mockCardsData} buttonTxt="Ver Cardápio" />)

    expect(screen.getByText('Restaurante 1')).toBeInTheDocument()
    expect(screen.getByText('Restaurante 2')).toBeInTheDocument()
    expect(screen.getByText('Restaurante 3')).toBeInTheDocument()
  })

  it('passa props corretas para Cards', () => {
    const mockOnClick = jest.fn()
    const props = {
      cards: mockCardsData,
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

    expect(screen.getByText('Restaurante 1')).toBeInTheDocument()
    expect(screen.getByText('Restaurante 2')).toBeInTheDocument()
    expect(screen.getByText('Restaurante 3')).toBeInTheDocument()
  })

  it('executa onClick quando especificado', () => {
    const mockOnClick = jest.fn()
    renderWithTheme(
      <CardList
        cards={mockCardsData}
        buttonTxt="Ver Cardápio"
        onClick={mockOnClick}
      />
    )

    const buttons = screen.getAllByText('Ver Cardápio')
    fireEvent.click(buttons[0])

    expect(mockOnClick).toHaveBeenCalledTimes(1)
  })

  it('renderiza com dados corretos', () => {
    renderWithTheme(<CardList cards={mockCardsData} buttonTxt="Ver Cardápio" />)

    expect(screen.getByText('Restaurante 1')).toBeInTheDocument()
    expect(screen.getByText('Restaurante 2')).toBeInTheDocument()
    expect(screen.getByText('Restaurante 3')).toBeInTheDocument()
    expect(screen.getByText('4.5')).toBeInTheDocument()
    expect(screen.getByText('4.3')).toBeInTheDocument()
  })

  it('renderiza tags corretamente', () => {
    renderWithTheme(<CardList cards={mockCardsData} buttonTxt="Ver Cardápio" />)

    expect(screen.getByText('Destaque da semana')).toBeInTheDocument()
    expect(screen.getByText('Japonês')).toBeInTheDocument()
    expect(screen.getByText('Italiano')).toBeInTheDocument()
  })

  it('renderiza rating quando fornecido', () => {
    renderWithTheme(<CardList cards={mockCardsData} buttonTxt="Ver Cardápio" />)

    expect(screen.getByText('4.5')).toBeInTheDocument()
    expect(screen.getByText('4.3')).toBeInTheDocument()
  })

  it('renderiza com props de tema corretas', () => {
    const themeProps = {
      cards: mockCardsData,
      $defaultColor: 'secondary' as const,
      $darkTheme: 'quaternary' as const,
      $lightTheme: 'primary' as const,
      $textColor: 'primary' as const,
      $textDarkTheme: 'secondary' as const,
      $textLightTheme: 'primary' as const
    }

    renderWithTheme(<CardList buttonTxt="Ver Cardápio" {...themeProps} />)

    expect(screen.getByText('Restaurante 1')).toBeInTheDocument()
    expect(screen.getByText('Restaurante 2')).toBeInTheDocument()
    expect(screen.getByText('Restaurante 3')).toBeInTheDocument()
  })

  it('renderiza com props de botão corretas', () => {
    const buttonProps = {
      cards: mockCardsData,
      buttonTxt: 'Pedir Agora',
      $buttonColor: 'primary' as const,
      $buttonTextColor: 'secondary' as const,
      $lgButtonPercent: 100,
      $mdButtonPercent: 80,
      $smButtonPercent: 90
    }

    renderWithTheme(<CardList {...buttonProps} />)

    const buttons = screen.getAllByText('Pedir Agora')
    expect(buttons).toHaveLength(3)
  })
})
